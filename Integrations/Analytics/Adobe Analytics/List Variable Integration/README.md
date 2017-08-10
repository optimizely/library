# Adobe Analytics List Variable Integration

This integration is used to track your Optimizely campaigns and experiments in Adobe Analytics using a pre-defined list variable.

## Description

Optimizely's [out of the box integration](https://help.optimizely.com/Integrate_Other_Platforms/Integrate_Optimizely_X_with_Adobe_Analytics) utilizes [Adobe's track link](https://blogs.adobe.com/digitalmarketing/analytics/custom-link-tracking-capturing-user-actions/) method to integrate the two platforms. Due to contractual constraints on Adobe API usage, it may be advantageous to avoid making extra track link calls when integrating individual experiments. This integration relies on Adobe's `s.t();` call to establish the integration which avoids the risk of Adobe usage overages.

## Prerequisites

1. The config.json file in this folder must be added to your Optimizely account. From the Optimizely Dashboard click Settings > Integrations, then click "Create Analytics Integration" > "Using JSON". After pasting the JSON into the code box the extension will auto-generate.

2. On line 2 of the JavaScript file you must configure the list variable your organization has available for experimentation. It is configured as "list1" by default, but it might be necessary to change this to "list2" or "list3".

3. The extension also needs to be enabled from the Integrations tab under the Settings menu.

## Implementation

Add this JavaScript code to your Adobe Analytics `s_code.js` file in the plug-ins section (or directly on your page after the `s_code.js` loads, but *before* the Adobe Analytics `s.t();` call is made):

```
if (window.optimizely && typeof window.optimizely.get === 'function' && window.optimizely.get("custom/adobeIntegrator")) {
    window.optimizely.get("custom/adobeIntegrator").assignCampaigns(s);
}
```

The timing of this code is very important. The `s` object must be defined so the integration can write to it, but `s.t();` must not be called yet. Note that the `s` variable is being passed as a parameter to `.assignCampaigns()`. It's possible your organization uses a custom `s` variable so be sure to pass in the appropriate object.

## Tracking Delayed Campaigns

Some experiment uses cases can not be satisfied by the implementation described above. If an experiment is activated after `s.t();` is called, then Optimizely misses the opportunity to set the variable with the decision string in the Adobe object. It is possible for timing problems to be introduced by using asynchronous features such as manual activation, conditional activation, geo-targeting, and IP Targeting (this list is not exhaustive).

To accommodate delayed use cases, the integration exposes another function, `trackDelayedCampaigns(s)`. This method can be called anytime after the delayed experiments' decision has been made. An easy place to place this code is in the Shared JS module:

```
window.optimizely.get("custom/adobeIntegrator").trackDelayedCampaigns(window.s);
```

## Limitations

As of August 10th, 2017, this integration will only work with redirect experiments if you're whitelisted for Optimizely's V2 redirect logic. Please contact your Customer Success Manager (CSM) to get your account whitelisted.

## Support

If you have questions about this integration or if you're experiencing unexpected behavior, please submit a support ticket via the Help menu on the left side of the Optimizely Dashboard.