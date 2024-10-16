#!/bin/bash

ICONS="clear-night cloudy fog lightning lightning-rainy partlycloudy pouring rainy hail snowy snowy-rainy sunny windy windy-variant";

# Cleanup
mkdir -p svg
rm -fr svg/*.svg

# Gen all icons
for icon in $ICONS; do
    node src/gen-icons.js "$icon" "day" > "svg/$icon.svg";
done

# Gen special icons with night variant
node src/gen-icons.js "partlycloudy" "night" > "svg/partlycloudy-night.svg";

# Optimize icons
yarn run svgo -f svg

# Gen icon map
node src/gen-map ./svg > ./svg/map.json
