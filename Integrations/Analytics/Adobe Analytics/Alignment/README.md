# Aligning Adobe Analytics with Optimizely Results
For organizations where alignment is critical, there are a few technical considerations and adjustments to make in order to best align to metrics in the two systems.

Misalignment can always be traced back to _when_ the two client tools are dispatching the impressions/conversions back to their respective servers. 

This challenge can be solved by aligning the two event calls as closely as possible. 

Optimizely offers the [hold/send API](https://help.optimizely.com/Set_Up_Optimizely/Control_the_timing_of_Optimizely_X_Web_Event_dispatch_with_holdEvents_and_sendEvents) for managing this.

## Two scenarios

### Adobe Loaded Ahead of Optimizely Snippet

Since Adobe is loaded first, we know the `s` variable is already defined by the time Optimizely Project JavaScript runs. We don't have to await it being defined. Hold events at the top of Project JS, register an Adobe pre-track handler that calls `sendEvents`.

```javascript
window.optimizely = window.optimizely || [];
window.optimizely.push({type: "holdEvents"});

s.registerPreTrackCallback(function() {
  // right before Adobe call
  window.optimizely.push({type: "sendEvents"});
});
```

### Adobe not guaranteed to load ahead of Optimizely Snippet

#### Recommended

Add the `holdEvents` call to the top of Project JavaScript

```javascript
window.optimizely = window.optimizely || [];
window.optimizely.push({type: "holdEvents"});
```

Add this JavaScript code to your Adobe Analytics `s_code.js` file in the *plug-ins* section (or directly on your page after the s_code.js loads, but before the Adobe Analytics s.t(); call is made)

```javascript
  window.optimizely = window.optimizely || [];
  window.optimizely.push({type: "sendEvents"});
```

#### Not recommended
> Uses `setInterval` polling

We need to wait for the `s` variable to be defined in order to register our pre-track handler. We can wrap our `registerPreTrackCallback` invocation with `waitUntil`, in order to guarantee that it can be called on the `s` variable.

```javascript
window.optimizely = window.optimizely || [];
window.optimizely.push({type: "holdEvents"});

var waitFor = function(v, cb, expiredCb) {
  var POLL, 
      WAIT_TIMEOUT = 2000, 
      POLL_INTERVAL_MS = 50;
  if(typeof v !== 'undefined') {
    cb(v);
    return;
  }
  POLL = setInterval(function() {
    if(typeof v !== 'undefined') {
      cb(v);
      clearInterval(POLL)
    }
  }, POLL_INTERVAL_MS);
  setTimeout(function() {
    clearInterval(POLL);
    typeof expiredCb !== 'undefined' ? expiredCb() : null;
  }, WAIT_TIMEOUT);
}

waitFor(window.s, function(sVariable) {
  sVariable.registerPreTrackCallback(function() {
    // right before Adobe call
    window.optimizely.push({type: "sendEvents"});
  });
}, function() {
  // Adobe s variable polling expired, release events
  window.optimizely.push({type: "sendEvents"});
});
```

