## Universal Analytics Debugger

This analytics integration allows you to enable troubleshooting custom events in order to identify potential reasons for discrepencies between Optimizely and Universal analytics.

## Setup

1.	Use config.json to import this custom analytics integration.

2.	Create 4 custom events within your project using the folowing API names:
	-	step1_ga_wait_success
	-	step2_ga_ready
	-	step3_ga_tracking_success
	-	step4_ga_timeout

4. Use the above custom event to define the three troubleshooting metrics within your metrics builder for the experiment you want to troubleshoot.

5. Enable this integration for the experiment you would like to troubleshoot.

## Settings

* **Custom Dimension**: GA Custom Dimension Slot. (You will need to edit the available cd values in the case 15 or 16 are available for you in Google analytics)
* **Custom Tracker Name**: GA tracker name if you are not using the default GA tracker name.
* **Polling Time**: How long do you want to wait for the GA object.
* **Debug mode**: Set on or of the debug events that will be pushed to your debug page.

## Reading the results

When enough visitors have been included in the experiment the results page will contain the following information.

- step1_ga_wait_success: Number of visitors for which the troubleshooting script ran.

- step2_ga_ready: Number of visitors for which the GA object was defined

- step3_ga_tracking_success: Number of visitors for which the event got sent successfully.

- step4_ga_timeout: Number of visitors for which the GA object was not loaded in time.

