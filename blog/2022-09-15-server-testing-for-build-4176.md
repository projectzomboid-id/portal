---
slug: server-testing-for-build-4176
title: Server Testing for Build 41.76 Unstable
authors: [dika]
tags: [technical]
---

As you can see, Build 41.76 Unstable just released tonight. We plan to do a server test using a Linux VPS (_30GB RAM, 600Mbps Bandwidth, and AMD EPYC CPU_) which used during the Build 41.73 before.

The reason we want to do the test once again is the changelog from Build 41.76 which is quite promising, including:

 1. The Sapph's Cooking mod can be re-entered with the consideration that this build can handle the missing vanilla item problem (_This is also the reason why yesterday we removed it from the modlist_).
```
Fixed bug in world dictionary when an item in a different module but with a similar name as an vanilla item was removed. Source: PZ Changelog
```
2.  P2P problems when logging into the server will disappear, because now the client will communicate directly with the server.
```
Selected game data is no longer transmitted through the Steam P2P API but through UDP instead.
```
3.  The connection between the player and the server will be better, because now all connections will be handled directly without a steam server intermediary. This includes the Zombie invisible problem will be resolved.
```
In essence the game will now also use direct communication with dedicated servers, instead of going entirely through Steam's own networking API, improving performance and stability for dedicated servers.
```
For more details, please check:
[https://theindiestone.com/forums/index.php?/topic/59641-4176-unstable-released/](https://theindiestone.com/forums/index.php?/topic/59641-4176-unstable-released/ "https://theindiestone.com/forums/index.php?/topic/59641-4176-unstable-released/")


