---
title: IpDoor
summary: SIP-based video doorbell, intercom, and access-control platform spanning iOS, Android, and desktop apps across consumer and custom embedded hardware.
tech: ["Swift", "UIKit", "iOS", "SIP", "PushKit/CallKit", "Core Bluetooth", "GRDB/SQLite", "Android", "FreeSWITCH"]
links:
  appStore: "https://apps.apple.com/it/app/ipdoor-mobile/id1474593077"
  playStore: "https://play.google.com/store/apps/details?id=com.ipdoor.mobile"
order: 1
---

The flagship product at InfinitePlay: a real-time video intercom and access-control
platform spanning consumer phones and custom Rockchip-based Android embedded
touchscreens mounted at the door.

On iOS, I led development in Swift/UIKit — building the navigation flow, custom
views, and Auto Layout screens, and porting over Android-only features, which cut
crash reports by 40%+ and raised the App Store rating. I built the VoIP calling
stack end to end: PushKit/CallKit incoming calls (including tracking down an APNs
content-available/mutable-content throttling issue that was silently dropping
calls), Linphone routed through a FreeSWITCH back-to-back user agent, and Core
Bluetooth pairing for device provisioning. Persistence runs on GRDB/SQLite with a
transactional, cross-table sync repository, plus in-flight state kept in
UserDefaults/Codable so it survives process kills — closing off a whole class of
data-loss and post-restart crash bugs.

On Android, the app runs the same core feature set — UI, app logic, and local
persistence with Room, Retrofit/OkHttp, and Firebase (FCM, Crashlytics) — tuned to
fit both phone screens and the embedded door touchscreens. Bluetooth and NFC support
opened up new hardware markets, and profiling work trimmed memory use and load times
on the low-resource embedded devices. On the embedded side, I customized AOSP
(Android 11) directly: SELinux policy fixes, Bluetooth HAL debugging, and OTA and
log-filtering improvements that measurably increased field reliability.

The calling stack is shared across platforms: SIP/VoIP calling (Linphone) works the
same way on Android, iOS, and an Electron desktop client, all routed through the same
FreeSWITCH back-to-back user agent, with call-transfer, hold, and media-negotiation
bugs tracked down at the SIP/SDP signaling level using pcap/Wireshark.
