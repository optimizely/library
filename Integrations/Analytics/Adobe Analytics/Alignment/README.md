# Aligning Adobe Analytics with Optimizely Results
For organizations where alignment is critical, there are a few technical considerations and adjustments to make in order to best align to metrics in the two systems.

Misalignment can always be traced back to _when_ the two client tools are dispatching the impressions/conversions back to their respective servers. 

This challenge can be solved by aligning the two event calls as closely as possible. 

Optimizely offers the [hold/send API](https://help.optimizely.com/Set_Up_Optimizely/Control_the_timing_of_Optimizely_X_Web_Event_dispatch_with_holdEvents_and_sendEvents) for managing this.

## Two scenarios

### Adobe Loaded Ahead of Optimizely Snippet

### Adobe not guaranteed to load ahead of Optimizely Snippet
