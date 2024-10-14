#!/bin/bash

ICONS="clear-night cloudy fog lightning lightning-rainy partlycloudy pouring rainy hail snowy snowy-rainy sunny windy windy-variant";

# Cleanup
mkdir -p build
rm -fr build/*.svg

# Gen all icons
for icon in $ICONS; do
    node src/gen-icon.js "$icon" "day" > "build/weather-$icon.svg";
done

# Gen special icons with night variant
node src/gen-icon.js "partlycloudy" "night" > "build/weather-partlycloudy-night.svg";

# Optimize icons
yarn run svgo -f build

# Gen icon map
node src/gen-icons ./build > ./build/map.json

# Generate dist
yarn run rollup --config rollup.config.js
