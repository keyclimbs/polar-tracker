# Metric methodology

## Source classes
- **Polar-provided:** Names and values returned by Polar, without application rescaling.
- **Application-derived:** Calculated locally from documented inputs; none are enabled in the first implementation.
- **User-entered:** Sleep goal, RPE, journal notes, and optional zone configuration.
- **Demo fixture:** Deterministic example data that is never substituted for live failures.

## Missing data
Missing observations remain null. The interface never converts absence to zero or implies interpolation.

## Nightly date convention
When live resources are implemented, an overnight sleep/recovery record will be assigned to the wake date in the user's configured IANA timezone. Source timestamps and offsets will be preserved.

## Experimental readiness
No readiness estimate is implemented. It would require a separate versioned formula, baseline window, minimum sample count, exclusions, missing-data behavior, and visible contributing inputs before activation.

## Training load
No native load series is invented. The optional transparent manual metric is RPE × duration minutes, reported as arbitrary units and never mixed with Polar-native load.

## Respiratory rate and heart rate
The app does not infer continuous stress from sparse heart rate. Overnight heart rate is never relabeled as resting heart rate.
