<div align="center">
  <div style="margin-left: -65px;">
    <img width="500" src="./logo.png" alt="Optimizely Library" />
  </div>
</div>

## About

This library houses a collection of Optimizely extensions, add-ons, guides, and samples for educating and enabling users of Optimizely.

If you can't find what you are looking or have any feedback, [open an issue](https://github.com/optimizely/library/issues) on this repository.

## Contents

- [Optimizely Web](#web)
- [Optimizely Edge](#edge)
- [Optimizely FullStack and Rollouts](#fullstack-and-rollouts)
- [Optimizely Platform](#platform)
- [Demos](#demos)
- [Community](#community)
- [Blog Posts](#blog-posts)
- [Videos](#videos)

## Web

### Extensions

Extensions are reusable templates for making changes in the visual editor of Optimizely Web. View the [documentation](https://developers.optimizely.com/x/extensions/) or our code samples in the [Extension Library](https://github.com/optimizely/extension-library/tree/master/Extensions). 

- [Background Image Swapper](Extensions/Editor&#32;Extensions/Background&#32;Image&#32;Swapper) - Swaps a background image without flicker
- [Banner](Extensions/Editor&#32;Extensions/Banner) - Add a top-level banner
- [Bottom Banner](Extensions/Editor&#32;Extensions/Bottom&#32;Banner) - Add a bottom-level banner
- [Countdown Timer](Extensions/Editor&#32;Extensions/Countdown&#32;Timer) - Add a customizable countdown timer
- [Dynamic Banner](Extensions/Editor&#32;Extensions/Dynamic&#32;Banner) - Add a bottom or top level banner
- [Email Capture Pop-up](Extensions/Editor&#32;Extensions/Email&#32;Capture&#32;Pop-up) - Add a pop-up which appears upon first visiting the page
- [Exit Intent Pop-up](Extensions/Editor&#32;Extensions/Exit&#32;Intent&#32;Pop-up) - Add a pop-up which appears when the user moves their mouse off the screen
- [Facebook Messenger Widget - beta](Extensions/Editor&#32;Extensions/Facebook&#32;Messenger&#32;Widget&#32;-&#32;beta) - Facebook messenger widget to engage customers
- [Hotspot](Extensions/Editor&#32;Extensions/Hotspot) - Hotspot to draw attention to an element on your page to guide user behavior
- [Localized Copy Change](Extensions/Editor&#32;Extensions/Localized&#32;Copy&#32;Change) - Make a copy change on your website in multiple languages
- [Multibuy Offer Reminder](Extensions/Editor&#32;Extensions/Multibuy&#32;Offer&#32;Reminder) - Display an offer pop-up based on user behaviors
- [Nudge](Extensions/Editor&#32;Extensions/Nudge) - Nudge the user towards a location to guide the user through a product
- [Price Changer](Extensions/Editor&#32;Extensions/Price&#32;Changer) - Change prices site-wide on the page (Note: does not edit prices in the your servers).
- [Sidebar Sliding Card](Extensions/Editor&#32;Extensions/Sidebar&#32;Sliding&#32;Card) - Add a sliding card for subtle reminders
- [Sliding Card Advanced](Extensions/Editor&#32;Extensions/Sliding&#32;Card&#32;Advanced) - Add a sliding card for subtle reminders based on user's browsing behavior
- [Social Share Popup](Extensions/Editor&#32;Extensions/Social&#32;Share&#32;Popup) - Add a pop-up which allows users to share text on social media
- [Text Swapper](Extensions/Editor&#32;Extensions/Text&#32;Swapper) - Change text quickly to prevent chance of flicker above the fold
- [Timed Modal](Extensions/Editor&#32;Extensions/Timed&#32;Modal) - Add a pop-up which launches after a defined number of seconds
- [Typed Messages](Extensions/Editor&#32;Extensions/Typed&#32;Messages) - Display text that automatically writes/scrolls across the page
- [Unsplash Photo Finder](Extensions/Editor&#32;Extensions/Unsplash&#32;Photo&#32;Finder) - Insert images from unsplash


### Custom Integrations

Custom integrations allow customers to create project level integrations that can be enabled/disabled for individual campaigns in Optimizely Web. Today, we support analytic integrations to extend Optimizely to your third party analytic tools. View our supported integrations in the [Integration Library](https://github.com/optimizely/extension-library/tree/master/Integrations/Analytics). 

- [AT-Internet](Integrations/Analytics/AT-Internet)
- [Adobe Analytics](Integrations/Analytics/Adobe&#32;Analytics)
- [Amplitude](Integrations/Analytics/Amplitude)
- [Google Analytics Callback](Integrations/Analytics/Google&#32;Analytics&#32;Callback)
- [Google Analytics](Integrations/Analytics/Google&#32;Analytics)
- [HotJar HeatMaps & Recordings](Integrations/Analytics/HotJar&#32;HeatMaps&#32;&&#32;Recordings)
- [Moat Analytics](Integrations/Analytics/Moat&#32;Analytics)
- [econda Analytics](Integrations/Analytics/econda&#32;Analytics)


### Project JavaScript

Project Javascript is an advanced configuration setting that provides a code field for JS to be executed before the Optimizely snippet's core logic begins executing. To learn more view our documentation.

 - [Clear Local Storage](Project-JS/clear-localstorage/) - Clear any local storage related to Optimizely

## Edge
- [Adobe Analytics List Variable Integration](Edge/Integrations/Analytics/Adobe/ListVar) - track your Optimizely Performance Edge campaigns and experiments in Adobe Analytics

## FullStack and Rollouts

Optimizely FullStack is A/B testing and feature flag management for product development teams. Experiment in any application. Make every feature on your roadmap an opportunity to learn. Learn more at https://www.optimizely.com/platform/full-stack/, or see the [documentation](https://docs.developers.optimizely.com/full-stack/docs).

Optimizely Rollouts is free feature flags for development teams. Easily roll out and roll back features in any application without code deploys. Mitigate risk for every feature on your roadmap. Learn more at https://www.optimizely.com/rollouts/, or see the [documentation](https://docs.developers.optimizely.com/rollouts/docs).

### JavaScript
- [Demo App: Algorithm Testing](https://github.com/optimizely/javascript-sdk-demo-app)
- [Demo App: Isomorphic React Web App](https://github.com/optimizely/isomorphic-react-demo-app)
- [Event Dispatcher: Experimental Solution for Tracking Redirect Clicks](https://github.com/optimizely/javascript-sdk-plugin-pending-events)
- [Redux Reducer: JavaScript SDK React Integration](https://github.com/thegreekjester/react_redux_js_integration)
- [SDK Wrapper: Client Manager](https://github.com/cooperreid-optimizely/optimizely-jsclient-manager)
- [Demo App: Amazon Alexa + FullStack](https://github.com/optimizely/alexa-demo)
- [Demo App: CLI + FullStack](https://github.com/pcolombo/optimizely-fullstack-sandbox)

### React
- [React SDK](https://github.com/optimizely/react-sdk)
- [Guide: Feature Flag Rollouts](https://blog.optimizely.com/2019/06/05/react-feature-flags/) - Rollout customer-by-customer with React Feature Flags

### Node
- [Express Middleware](https://github.com/optimizely/express-middleware) - convenient wrapper to make installation in an ExpressJS application easy
- [Guide: Feature Flag Rollouts](https://blog.optimizely.com/2019/06/17/feature-flags-node-express/) - Rollout customer-by-customer with Feature Flags in Express
- [RunKit: Simple Node Feature Flag](https://runkit.com/asaschachar/optimizely-node-sdk-example)
- [RunKit: Secure Webhook Implementation](https://runkit.com/asaschachar/secure-webhook-example-node)

### PHP
- [Demo App: Algorithm Testing](https://github.com/optimizely/php-sdk-demo-app)

### Python
- [Demo App: Algorithm Testing](https://github.com/optimizely/python-sdk-demo-app)
- [Demo App: SMS with Twilio](https://github.com/optimizely/fullstack-outbound-marketing)
- [SDK Wrapper: Async Event Dispatcher](https://gist.github.com/cooperreid-optimizely/4d57682b39deb3557d437ae79c991eb3)
- [SDK Wrapper: Bulk Event Dispatcher with AWS SQS](https://github.com/mauerbac/opti_fullstack_event_dispatcher)

### Ruby
- [Demo App: Algorithm Testing](https://github.com/optimizely/ruby_full_stack_demo)
- [SDK Wrapper: Cached Datafile](https://github.com/ankit8898/optimizely_server_side)

### Android
- [Demo App](https://github.com/optimizely/android-sdk/tree/master/test-app)

### Java & Kotlin
- [poetimizely](https://github.com/patxibocos/poetimizely/) - generate type safe accessors for Optimizely experiments and features.

### iOS
- [Demo App](https://github.com/optimizely/objective-c-sdk/tree/master/OptimizelyDemoApp)

### FullStack Edge
- [Cloudflare Worker Example](https://medium.com/opendoor-labs/cloudflare-workers-opendoor-landing-page-infrastructure-824853a34551) - blog example of using Optimizely in a Cloudflare worker

### Microservice
- [Optimizely Agent](https://github.com/optimizely/agent) - Optimizely containerized for use in a microservice environment
- [Microservice Example](https://medium.com/compass-true-north/adopting-optimizely-at-compass-158ab86b82f4) - blog example of using Optimizely in a microservice environment

## Platform

### CLI
- [Optimizely CLI](https://github.com/optimizely/optimizely-cli) - Command line interface for the REST API

### REST API
- [FullStack Postman Collection](https://api.optimizely.com/collections/fullstack.json) - Download [Postman](https://www.getpostman.com/downloads/) and import this collection to view API request examples

## Demos
- [Flappy Bird Video](https://www.optimizely.com/resources/flappybird-video-tutorial/)
- [Flappy Bird Step-by-Step](https://optimizely.github.io/asa/flappybird/)

## Community
- [Optimizely Slack community](https://www.optimizely.com/slack-community/)
- [Optimizely Developer Newsletter](https://www.optimizely.com/developers/#newsletter) - sent on the last Wednesday of the month

## Blog Posts
- Powerful Feature Flags in [React](https://blog.optimizely.com/2019/06/05/react-feature-flags/)
- Powerful Feature Flags in [Node](https://blog.optimizely.com/2019/06/17/feature-flags-node-express/)
- Powerful Feature Flags in [iOS](https://blog.optimizely.com/2020/02/24/feature-flags-swift-ios/)
- eBook: [Ship Confidently with Progressive Delivery and Experimentation](https://optimize.ly/ship-confidently-ebook)
- [Write Automation Tests for Feature Flags](https://blog.optimizely.com/2020/03/26/automation-testing-feature-flags/)
- [Keep Your Development Trains Running Through the Holiday Code Freeze](https://blog.optimizely.com/2019/10/30/keep-your-development-trains-running-through-the-holiday-code-freeze-2/)
- [Manage Outdated Feature Flags](https://blog.optimizely.com/2019/07/16/manage-outdated-feature-flags/)
- [Feature Flag Ownership Model: Which one is right for you?](https://blog.optimizely.com/2020/04/09/feature-flag-ownership-management/)
- [Feature Flags: 3 Use Cases for your Development Cycle](https://blog.optimizely.com/2019/06/26/feature-flags-how-to-integrate-them-into-your-development-cycle/)
- [When to Feature Flag, Rollout, or A/B test?](https://blog.optimizely.com/2020/04/23/feature-flags-vs-ab-testing/)

## Videos 
- [Implementing Backend Feature Flags in JavaScript](https://www.youtube.com/watch?v=0k5HQVmlItc)
- [Implementing A/B Tests in React](https://www.youtube.com/watch?v=-HMoI9UcR1k)
- [Implementing Static Site Feature Flags](https://www.youtube.com/watch?v=Q7xjIvQf2G4)
- [5 Powerful Capabilities of Optimizely](https://www.youtube.com/watch?v=DVjnOYi4214)
- [Implementing Optimizely’s Astronaut Demo](https://www.youtube.com/watch?v=o9qEttpdTI0&t=73s)
- [Introduction to Rollouts](https://youtu.be/ovI0IyPmido)
- [Why doesn't Optimizely Full Stack slow down your application](https://www.youtube.com/watch?v=igGMFAz6rqc)
- [What happens if Optimizely Full Stack goes down](https://youtu.be/Ty89bLUcc_o)
- [How does Audience targeting work in Optimizely](https://www.youtube.com/watch?v=tJEveVFR4WE)
- [How does Optimizely Full Stack work in Microservices](https://www.youtube.com/watch?v=n5RveFQt6Rg)


<div align="center">
  <img width="20" src="./logo_small.jpg" alt="Optimizely Library" />
</div>
