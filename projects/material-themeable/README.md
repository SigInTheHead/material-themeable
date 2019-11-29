# material-themeable
[![npm](https://img.shields.io/npm/v/material-themeable?style=for-the-badge)](https://www.npmjs.com/package/material-themeable)
[![NPM](https://img.shields.io/npm/l/material-themeable?style=for-the-badge)](https://www.npmjs.com/package/material-themeable)
[![npm](https://img.shields.io/npm/dm/material-themeable?style=for-the-badge)](https://www.npmjs.com/package/material-themeable)
[![GitHub last commit](https://img.shields.io/github/last-commit/SigInTheHead/material-themeable?style=for-the-badge)](https://github.com/SigInTheHead/material-themeable)
[![GitHub issues](https://img.shields.io/github/issues/SigInTheHead/material-themeable?style=for-the-badge)](https://github.com/SigInTheHead/material-themeable/issues)

An extension to angular material

Gives you the ability to add angular theming to any component. Also gives greater access to material theme colors, such
as 'darker' and 'lighter'. If you are really brave you can even access the raw palette colors i.e. '50' - '900' and
'A100' - 'A700'.

## Demo
coming soon

## Installation
```shell script
npm install material-themeable -P
```

In your styles.scss
import the theme
```scss
@import "~material-themeable/theming";
```

Right after you include your angular theme, include material themeable

So from this
```scss
@include angular-material-theme($my-theme);
```

to this
```scss
@include angular-material-theme($my-theme);
@include material-themeable($my-theme);
```
if you have multiple themes available you will need to include this theme just as you do the angular theme
```scss
body {
...
    @include angular-material-theme($my-theme);
    @include material-themeable($my-theme);
    
    &.dark {
      @include angular-material-theme($my-dark-theme);
      @include material-themeable($my-dark-theme);
    }
}
```

## Usage

Add the `matThemeable` attribute to your HTML tag along with one or more of the Input attributes. 
Adding the `matThemeable` on it's own won't have any impact on the HTML element

#### HTML elements
```angular2html
<div matThemeable color="primary">test</div>
```

#### Angular Material Components
It's possible to extend standard angular material components
```angular2html
<mat-toolbar matThemeable color="primary" hue="lighter">
  <h1>Title</h1>
</mat-toolbar>
```
This will give a standard material tool bar, but using the themes primary light color


## Inputs
| Input | Description | Type |
|---|---|---|
| `color` | sets the background color and text color using a one of the themes palettes | MatThemeablePalette |
| `hue` | modifies the color using additional colors in the palette | MatThemeableHue |
| `layout` | sets a predefined layout, if used margin and padding are ignored | MatThemeableLayout |
| `margin` | sets predefined margin, if used horizontalMargin and verticalMargin are ignored | MatThemeableSize |
| `padding` | sets predefined padding, if used horizontalPadding and verticalPadding are ignored | MatThemeableSize |
| `horizontalMargin` | sets predefined margin-left and margin-right | MatThemeableSize |
| `verticalMargin` | sets predefined margin-top and margin-bottom | MatThemeableSize |
| `horizontalPadding` | sets predefined padding-left and padding-right | MatThemeableSize |
| `verticalPadding` | sets predefined padding-top and padding-bottom | MatThemeableSize |

## Types
#### MatThemeableHue
__*Warning* - using this option can very quickly lead to an incoherent design!__ If you do use this input it is recommended to
only use the `'default'`, `'lighter'` and `'darker'`. This is especially true if your site has the ability to switch
themes.

Don't say you weren't warned!!!
 - `'50'`
 - `'100'`
 - `'200'`
 - `'300'`
 - `'400'`
 - `'500'`
 - `'600'`
 - `'700'`
 - `'800'`
 - `'900'`
 - `'A100'`
 - `'A200'`
 - `'A400'`
 - `'A700'`
 - `'default'`
 - `'lighter'`
 - `'darker'`
 
 #### MatThemeableLayout
  - `'small'`
  - `'standard'`
  - `'large'`
  - `'very-large'`

#### MatThemeablePalette
 - `'base'`
 - `'primary'`
 - `'accent'`
 - `'warn'`
 
 #### MatThemeableSize
  - `'none'`
  - `'very-small'`
  - `'small'`
  - `'standard'`
  - `'large'`
  - `'very-large'`
