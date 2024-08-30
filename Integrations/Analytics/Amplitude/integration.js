// VERSION 0.2.0
// Last Updated: August 30th 2024

const MAX_ATTEMPTS = 9;
const RETRY_DELAY_MS = 1000;

const logEvent = ({campaign, experiment, variation, holdback}) => {
	const eventProperties = {
		'[Optimizely Campaign]': campaign,
		'[Optimizely Experiment]': experiment,
		'[Optimizely Variation]': variation,
		'[Optimizely Holdback]': holdback
	};

	window.amplitude.logEvent(extension.event_name, eventProperties);
};

const identifyCall = ({experiment, variation, holdback}) => {
	if (!holdback) {
		const identifyEvent = new window.amplitude.Identify();
		identifyEvent.set(`${extension.property_prefix} ${experiment}`, variation);

		window.amplitude.identify(identifyEvent);
	}
};

const sendData = () => {
	const campaignInfo = window.optimizely
		.get('state')
		.getDecisionObject({ campaignId });

	if (campaignInfo) {
		// Always send identify event
		identifyCall(campaignInfo);
		if (extension.send_event === 'y') {
			// Only log event if so configured
			logEvent(campaignInfo);
		}
	}
};

const sendToAmplitude = (numberOfAttempts) => {
	if (window.amplitude) {
		// Send data to Amplitude
		sendData();
	} else {
		// Retry until Amplitude is initialized
		if (numberOfAttempts < MAX_ATTEMPTS) {
			setTimeout(() => {
				sendToAmplitude(numberOfAttempts + 1);
			}, RETRY_DELAY_MS);
		}
	}
};

sendToAmplitude(0);