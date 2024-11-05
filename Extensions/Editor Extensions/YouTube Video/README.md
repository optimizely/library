# YouTube Video with built-in event tracking

## Description

Adds a YouTube video to your website using the YouTube IFrame API.

You can create this extension using the JSON from the file here:  [`config.json`](./config.json)

More information on extensions is available here: https://support.optimizely.com/hc/en-us/articles/4410289006861-Use-Extensions

## Fields

When adding this extension to a variation, you will need to configure the following values.

| Field Name      | Description |
| --------------- | ----------- |
| Video Placement | Similar to the "HTML Placement" fields in the "Insert HTML" change type.
| Video ID        | YouTube video ID. This can be found in the video URL
| Width           | Desired width.
| Height          | Desired height.

## Custom events

This extension will automatically track the following events. Note that you will still need to create these custom events if you haven't do so already. The API name needs to match exactly, but the (regular) name can be anything.

| API Name        | Description |
| --------------- | ----------- |
| `youtube_ready` | YouTube player has successfully loaded.
| `youtube_play`  | Visitor pressed play.
| `youtube_pause` | Visitor pressed pause.
| `youtube_end`   | Video reached the end.

All events will include the following built-in event properties.

| Property Name   | Description |
| --------------- | ----------- |
| `SKU`           | Video ID    |
| `Text`          | Video Title |

More information on custom events and event properties is available here:
https://support.optimizely.com/hc/en-us/articles/4410288960909-Custom-events
