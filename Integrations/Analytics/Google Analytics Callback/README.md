# Google Analytics Callback Integration

This integration is used to track your Optimizely campaigns and experiments in Google Analytics using a callback method.

## Description

Optimizely's [out of the box integration](https://help.optimizely.com/Integrate_Other_Platforms/Integrate_Optimizely_X_with_Google_Universal_Analytics) utilizes a polling method with a ten second timeout to integrate the two platforms. Mobile clients on slower connections have a higher propensity to trigger this ten second timeout so integration success can skew toward higher performance desktop devices. This integration approach will help remediate instances where the polling integration method times out.

## Prerequisites

1. The config.json file in this folder must be added to your Optimizely account. From the Optimizely Dashboard click Settings > Integrations, then click "Create Analytics Integration" > "Using JSON". After pasting the JSON into the code box the extension will auto-generate.

2. The extension also needs to be enabled from the Integrations tab under the Settings menu.

3. Your experiment of choice needs to have the integration turned on and a custom dimension must be set.

## Implementation

Add this JavaScript code to your page source *after* the `ga` object has been initialized:

```
if (window.optimizely && typeof window.optimizely.get === 'function' && window.optimizely.get("custom/gaIntegrator")) {
    window.optimizely.get("custom/gaIntegrator").gaDispatch(window.ga);
}
```

The timing of this code is very important. The `ga` object must be defined so the integration can utilize the Google Analytics `send` command. Note that the `ga` object is being passed as a parameter to `.gaDispatch()`. It's possible your organization uses a [custom `ga` variable](https://developers.google.com/analytics/devguides/collection/analyticsjs/renaming-the-ga-object) so be sure to pass in the appropriate object.

## Tracking Delayed Campaigns

Campaigns using delayed activation methods will be tracked *automatically* with this integration. NOTE: If you are renaming the `ga` object, then you should change lines 34 and 35 of the `integration.js` file to reflect the renamed `window` level object.

## Support

If you have questions about this integration or if you're experiencing unexpected behavior, please submit a support ticket via the Help menu on the left side of the Optimizely Dashboard.
