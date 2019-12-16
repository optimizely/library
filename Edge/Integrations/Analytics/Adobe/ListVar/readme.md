# Adobe Analytics List Variable Integration

This integration is used to track your Optimizely Performance Edge campaigns and experiments in Adobe Analytics using a pre-defined list variable.

For additional background on the design of this solution, please see [WebX Adobe ListVar integration](https://github.com/optimizely/library/blob/cooper-edge-adobe-listvar/Integrations/Analytics/Adobe%20Analytics/List%20Variable%20Integration/README.md)

### Implementation

Add this JavaScript code to your Adobe Analytics `s_code.js` file in the plug-ins section (or directly on your page after the `s_code.js` loads, but before the Adobe Analytics `s.t();` call is made):

If you're using both Web & Edge and need Adobe to integration with both, you can simply add both calls above each other within `s_code.js`.

```javascript
// `s` must reference your primary Adobe variable to which evars and listvars get attached.
try {
  window.OptimizelyEdgeIntegrators.get('adobe').assignCampaigns(s);
} catch(err) { }

try {
  window.optimizely.get("custom/adobeIntegrator").assignCampaigns(s)
} catch(err) { }
```
