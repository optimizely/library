# Adobe Analytics List Variable Integration

This integration is used to track your Optimizely Performance Edge campaigns and experiments in Adobe Analytics using a pre-defined list variable.

For additional background on the design of this solution, please see [WebX Adobe ListVar integration](https://github.com/optimizely/library/blob/cooper-edge-adobe-listvar/Integrations/Analytics/Adobe%20Analytics/List%20Variable%20Integration/README.md)

## Implementation

#### 1. Add & configure Project JS code

Add the [listvar.project.js](listvar.projectjs.js) code to your Project JavaScript. Set the `LISTVAR` variable to your desired list variable.

#### 2. Add code to `s_code.js`

Add the following JavaScript code to your Adobe Analytics `s_code.js` file in the plug-ins section (or directly on your page after the `s_code.js` loads, but before the Adobe Analytics `s.t();` call is made):

```javascript
// `s` must reference your primary Adobe variable to which evars and listvars get attached.
try {
  window.OptimizelyEdgeIntegrators.get('adobe').assignCampaigns(s);
} catch(err) { 
  console.warn('[Optimizely] Optimizely Edge Integrator failed to assign Adobe Analytics campaigns with error' + err);
}
```
