---
title: CheapCarburante
summary: iOS app that surfaces the cheapest fuel station near you — or along your route — using Italy's live government open-data feed.
tech: ["Swift", "SwiftUI", "iOS", "CoreLocation", "MapKit", "Swift Concurrency"]
order: 2
---

## What it is

CheapCarburante is an iPhone app for finding the lowest fuel price nearby. You pick the
fuel type (petrol, diesel, GPL, methane) and service mode (self or attended), and the app
ranks every station within 5 km by price. If you're about to drive somewhere, you can
enter a destination and it surfaces only stations that are actually on your way — no
detour required.

## Why I built it

Fuel prices in Italy can swing 20–30 cents per litre between stations on the same street.
The government publishes daily price updates as raw CSV files, but there's no official app
that makes them searchable. I wanted something lightweight that just answers "where is the
cheapest petrol near me right now?"

## How it works

The app pulls two CSV files from **MIMIT** (Italy's Ministry of Enterprises), the official
_Osservatorio prezzi carburanti_ dataset updated every morning at 08:30 Rome time:

- **Station registry** — ~22 000 active stations with coordinates, brand, and address
- **Price list** — current prices per station, fuel type, and service mode

The CSVs are parsed on-device, joined by station ID, and sorted by price. Conditional GETs
(ETag / Last-Modified) keep network traffic minimal: a repeat launch costs a single 304
round-trip instead of downloading megabytes again.

When a destination is set, a lightweight corridor algorithm filters for stations whose
detour from the straight-line path is under a configurable threshold, so you're never sent
backwards.

The results are displayed as a sorted list or on a MapKit map. Tapping any station opens
Apple Maps turn-by-turn navigation directly.

## Screenshots

<!-- Replace the paths below with your actual screenshots once exported from the simulator -->

![Station list sorted by price](/screenshots/cheap-carburante-list.png)

![Map view with price pins](/screenshots/cheap-carburante-map.png)

![Fuel type and mode selector](/screenshots/cheap-carburante-controls.png)
