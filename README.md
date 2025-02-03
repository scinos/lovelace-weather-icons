# Lovelace Weather Icons

[![hacs_badge](https://img.shields.io/badge/HACS-Default-41BDF5.svg)](https://github.com/hacs/integration)
[![GitHub release (latest by date)](https://img.shields.io/github/v/release/scinos/lovelace-weather-icons)](https://github.com/scinos/lovelace-weather-icons/releases/latest)

Official weather icons from Home Assistant

## Installation

While this plugin doesn't require HACS, the instructions are provided for HACS. If you are used
to install plugins without HACS, then you probably don't need instructions anyway.

1. In Home Assistant, navigate to HACS
2. Select the 3 dots icon in the top right and choose Custom repositories
3. Add this repository https://github.com/scinos/lovelace-weather-icons/, type 'Dashboard'
4. Lovelace Weather Icons should be shown as a new repository available to install. Install it.
5. Reload the UI

## Usage

This plugin provides weather icons that are part of Home Assitant, but in a format that can be used in cards, badges, etc.

The list of icons is:

| Name                    | Icon                                                        |
| ----------------------- | ----------------------------------------------------------- |
| `wi:clear-night`        | ![Icon wi:clear-night       ](./svg/clear-night.svg       ) |
| `wi:cloudy`             | ![Icon wi:cloudy            ](./svg/cloudy.svg            ) |
| `wi:fog`                | ![Icon wi:fog               ](./svg/fog.svg               ) |
| `wi:hail`               | ![Icon wi:hail              ](./svg/hail.svg              ) |
| `wi:lightning-rainy`    | ![Icon wi:lightning-rainy   ](./svg/lightning-rainy.svg   ) |
| `wi:lightning`          | ![Icon wi:lightning         ](./svg/lightning.svg         ) |
| `wi:partlycloudy-night` | ![Icon wi:partlycloudy-night](./svg/partlycloudy-night.svg) |
| `wi:partlycloudy`       | ![Icon wi:partlycloudy      ](./svg/partlycloudy.svg      ) |
| `wi:pouring`            | ![Icon wi:pouring           ](./svg/pouring.svg           ) |
| `wi:rainy`              | ![Icon wi:rainy             ](./svg/rainy.svg             ) |
| `wi:snowy-rainy`        | ![Icon wi:snowy-rainy       ](./svg/snowy-rainy.svg       ) |
| `wi:snowy`              | ![Icon wi:snowy             ](./svg/snowy.svg             ) |
| `wi:sunny`              | ![Icon wi:sunny             ](./svg/sunny.svg             ) |
| `wi:windy-variant`      | ![Icon wi:windy-variant     ](./svg/windy-variant.svg     ) |
| `wi:windy`              | ![Icon wi:windy             ](./svg/windy.svg             ) |

## Contribute

### Development

To start the proyect in dev mode, run `yarn dev`. This will compile the proyect every time there are changes,
and serve it on port 10001. Then, go to a Home Assistant instance and add a new resource to the dashboard, with
the URL `http://<your-ip>:10001/weather-icons.js`

To contribute, create a fork of the repository and create PRs with your changes.

### Production

Run `yarn build`. This will generate the bundled file in `dist`. Copy it over to your Home Assistant instance (or
serve it via HTTP), add it as a script resource to a dashboard and reload the dashboard.

### Release

After a successful merge to `main`, create a release in GitHub. Fill the release notes and version as appropiate. Once
the release is created, a GitHub Workflow will compile the proyect and attach the bundle to the release as a downloadable file.
