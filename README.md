# Pixelmap_Infoklasse
[infoklasse](https://github.com/infoklasse/image-analysis)


## Note(ToDo List)
- [ ] mobile design
- [ ] checken Deutsch 
- [ ] hosting(with image) und danach schicken => Robin

## Index
- [01.Tint](#01_Tint)
- [02.U_array](#02_U_Array)
- [03.U_array](#03_Operator)


## 01_Tint
- Ein Experiment mit Tint


## 02_U_Array
- [loadPixels](https://p5js.org/reference/#/p5/loadPixels)
- get, set, updatePixels, pixelDensity
- loadPixels => set => updatePixels => image
- image.loadPixels
- for(width) for(height)
- image.get(x, y)
- image.set(x, y, rgba)
- image.updatePixels
- iconizität?
- [buffer](https://appdividend.com/2019/03/26/javascript-arraybuffer-example-arraybuffer-object-tutorial/)


## 02_Array
- push
- createButton
- save Image
- .mousePressed(function)
- .save("name", "file") ex) ("dain", "png")
07image)analyse


## 03_Operator
[Robin_Code](https://github.com/infoklasse/pixelmaps-pixeldata)
[Operator_js_mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)
- größer als nächstes Y value
- [lightness](https://p5js.org/reference/#/p5/lightness)
```javascript
    const color = image.get(x, y);
    const color2 = image.get(x, y + 1);
    let newColor;

    if(lightness(color) > lightness(color2)){
        newColor= [0,0,0,0]
    }else{
        newColor = [255,255,255,255]
    }
    image.set(x, y, newColor)
```
<br />

- die Unterschied

```javascript
++i und i++
!== und ==!
```

<br>

<strong>pixelSize</strong>

- 08_reduce folder
- [img.resize()](https://p5js.org/reference/#/p5.Image/resize)
- stroke
- shapes
- farben

```javascript
let pixelSize = 10;
for(let i = 0; i < img.width; i += pixelSize){
    for(let j = 0; j < img.height; j += pixelSize){
        fill(img.get(i, j))
        rect(i, j, pixelSize, pixelSize)
    }
}
```
💡mit Mod experimentieren
💡dist, class, mousePos, map, [lerp](https://p5js.org/reference/#/p5.Vector/lerp)


```javascript
const dot_size = (lightness(in_color) / 255) * 40
```


```javascipt
x * CanvasSize / image.width + CanvasSize / image.width * 0.5
```
- durch Farben entschieden die Größe von Circle


🐲 <strong>Aufgabe</strong>

- +=, == experiment
- <= experiment



### CSV
[RobinCode](https://github.com/infoklasse/pixelmaps-pixeldata/tree/main/011_CMS)
- preload => csv
- methode
.getRowCount()
.getString(row, column)

- aufgabe => dokumentation weiter entwickeln.