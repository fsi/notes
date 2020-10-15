---
title: «Smart» speaker project
date: 2020-10-15
tags:
- projects
---

# «Smart» speaker project

Provisional name: "hobos"

Basic idea: dumb speaker + basic single-board pc (e.g. Pi Zero W) + linux with mpd ⇒ profit

## Hardware
Done:

1. Very cheap USB powered speaker in "soundbar" form-factor (about $15)
2. OrangePi Lite
3. Some cheapo 8GB SD card
4. Cheapo USB sound card (OrangePi lite has a line-out but the pads are **microscopic**)
5. USB hub (to power both OrangePi and speaker)

Todo:
- Heatsinks for the board (it gets really hot unless you throttle the CPU on every boot) `*`
- Check if my USB power supply is enough to power both board and the speaker :| `*`
- Put everything inside the speaker case (after some checking, it should all fit fine) `****`

## Software

So far (2020-10-15), I have only flashed linux on it :|

TODO:
- ansible for updates `*`
- mopidy with spotify/yamusic plugins (?)  `**`

## Further ideas / links
- [KaRadio](https://github.com/karawin/Ka-Radio), [addons](https://github.com/karawin/Karadio-addons), [instructables](https://www.instructables.com/Wifi-Webradio-With-ESP8266-and-VS1053/) - similar project, but on ESP8266 and even cheaper (but only does shoutcast streams)
- Use an ~~old~~ *vintage* radio case, probably its speaker as well, have plenty of those at home
