# material-themeable

An extension to angular material

Gives you the ability to add angular theming to any component. Also gives greater access to material theme colors, such
as 'darker' and 'lighter'. If you are really brave you can even access the raw palette colors i.e. '50' - '900' and
'A100' - 'A700'.

## Installation
`npm install material-themeable`

In your styles.scss
import the theme
```scss
@import "~material-themeable/theming";
```

Right after you include your angular theme include material themeable

So from this
```scss
@include angular-material-theme($my-theme);
```

to this
```scss
@include angular-material-theme($my-theme);
@include material-themeable($my-theme)
```
if you have multiple themes available you will need to include this theme just as you do the angular theme
```scss
body {
...
    @include angular-material-theme($my-theme);
    @include material-themeable($my-theme)
    
    &.dark {
        @include angular-material-theme($my-dark-theme);
        @include material-themeable($my-dark-theme)
    }
}
```
