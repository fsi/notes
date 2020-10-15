---
title: Toshiba Libretto 50CT project
date: 2020-10-15
tags:
  - projects
---

# Toshiba Libretto 50CT
It's an old (1997) laptop.
It has Pentium-75 and 16MB of RAM.
Its screen is 640x480 pixels big (sans a couple of dead ones).
Mine lacks the port replicator, so the only connections I have are IR, PC Card and speaker ports.
No floppy/CD drive either.

## My plans for it
My plans on it depend on how broken it actually is, but I'm torn between a retro-gaming machine and a tiny off-the-grid workstation. Why not both?

The CF card adapter (if it fits the case) has the CF slot pointing outside, so I'll be able to switch and swap the CF cards quite easily (with the power turned off of course). So far I have two spare CF cards, so

1. would be DOS/Windows 3.1/Windows 95 setup, with games, wordperfect and DOS programming stuff
2. would be an old Linux/BSD distro that would work on this machine. E.g. OpenBSD 4.2 works with 16 MB of RAM (later versions up this requirement to 24MBs). I also have Debian woody distro and linux mandrake from the era.

## First steps (2020-10-15)
It came with a bit janky 40GB 2.5" HDD (of which its BIOS could only see the first 8), and bad battery.

It would actually hang up when e.g. playinh a sound in DOOM, or just randomly in windows.
Possible reasons: overheating, something bad in the motherboard, and the aforementioned bad battery.

By bad I mean someone has actually connected a lithium primary cell instead of two NiMH cells.
They did put a diode inline to try and reduce 3V to 2.4V the board expects, but it still started with `WRONG BATTERY` every time.
So far the tests show broken RTC module, hope it's just because of no battery and nothing permanent.

I've also ordered an SD→44-pin IDE adapter (and a CF → 44-pin IDE adapter) to replace the hard drive.
The SD one arrived and works fine (with an 8GB SD card), the CF is still in delivery.

Another thing is an Ethernet adapter for the PC-card slot, if it works it'll be useful for transferring data to and from the machine (without unplugging the CF card).

### Side note: how DO you install an OS on it?
It has no external drives, and only one HDD slot. WHAT DO?

I've managed to install FreeDOS on an empty SD card by creating a VirtualBox machine, installing FreeDOS there, then converting its virtual HD image to RAW format and dd'ing it to the SD card.

For example:

```
VBoxManage clonehd freedos/freedos.vdi freedos.img --format raw
dd if=image.img of=/dev/sdb bs=4M
```

The laptop then boots off the SD card normally AND the card appears normal for the newer PCs, so I can just copy additional software to it as usual.
