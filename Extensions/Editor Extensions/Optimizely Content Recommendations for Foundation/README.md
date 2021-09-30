# Optimizely Content Recommendations for Foundation

![Screenshot](https://github.com/optimizely/extension-library/blob/master/Extensions/Editor%20Extensions/Optimizely%20Content%20Recommendations%20for%20Foundation/screenshot.png)

## Description

The Optimizely Content Recommendations for Foundation extension places contents recommendations on a page. Content recommendations are automatic and specific to each visitor based on their behaviour.

It is a version of the Optimizely Content Recommendations package, which is pre-styled to work with a default Optimizely Foundation site

**Note**: An Optimizely Content Recommendations subscription is required for use

## Fields

* Insert After - selects the element to insert the recommendations after
* Number of recommendations - the number of recommedations to show
* Recommendations API key - The Optimizely Recommendations API key, this selects the delivery from Optimizely Content Recommendations to be shown
* Call to action button text - CTA text shown on the button below the abstract

## Customisation

Implementators may wish to change the recommendations API key to a drop down list if they wish to limit the deliveries users can pick from.

## Implementation

The Apply JS tab should be adjusted depending on region Optimizely Content Recommendations is running in. Your Optimizely CSM can advise on what domain to set or it can be found in Content Recommendations > Engage > Deliveries > [Edit a delivery] > Installation section. 

The recommendations API key can be retrieved from Optimizely Content Recommendations UI (Engage > Deliveries > [pick or create a widget]) as shown in the red box below:

![Optimizely Content Recommendations API Key Location](https://github.com/optimizely/extension-library/blob/master/Extensions/Editor%20Extensions/Optimizely%20Content%20Recommendations%20for%20Foundation/ApiLocation.png)
