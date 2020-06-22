# Quantum Metric Integration

This analytics extension is used to integrate Optimizely Web with Quantum Metric.

This will allow you to segment reports, heatmaps and session replays in Quantum Metric based on which Optimizely experiment or personalization campaign experience your visitors saw.

## Using this Extension

1. Make sure Quantum Metric is enabled and running on your site. This integration makes use of [Quantum Metric's Send Event API.](https://support.quantummetric.com/hc/en-us/articles/360016293373-Quantum-Metric-API)

2. Make sure the `quantumReady` event listener is enabled in your Quantum Metric subscription. Contact your Quantum Metric CSE for assistance in enabling this feature.

3. [Add the extension](https://help.optimizely.com/Integrate_Other_Platforms/Custom_analytics_integrations_in_Optimizely_X) to your Optimizely Web project, and enable it for your project.

4. Enable this integraiton for each experiment / campaign you wish to track under the 'Integrations' tab of the experiment / campaign.

## Configurable Fields

The following fields can be configured on a per-campaign basis. You can set default values for the integration under your Optimizely project settings.

* Decision ID:
* Campaign Event ID:  
* Experiment Event ID: 
* Variation Event ID:
* Holdback Event ID:


## Support

Contact your Quantum Metric CSE for questions regarding:
* Enabling the `quantumReady` event listener in your account
* Using Optimizely Data in your Quantum Metric dashboard

Contact Optimizely Support for questions regarding:
* Help with setting up and using this extension in your Optimizely Campaigns
* Significant discrepancies between visitor counts in Optmizely and Quantum Metric

Author: Joe LoPresti (<jlopresti@quantummetric.com>)