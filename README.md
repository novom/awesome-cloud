This is a wrapper for the http://www.jqueryscript.net/text/Awesome-Tag-Cloud-Plugin-with-jQuery-Html5-Canvas-awesomeCloud.html

# Installation #
```
meteor add novom:awesome-cloud
```

# Configuration #
HTML
```
<div id="wordCloud">
  {{#each data}}
    <span data-weight="{{weight}}">{{tag}}</span>
  {{/each}}
</div>
```

JS
```
Template.template_name.helpers({
  data: function() {
    return [
      {tag: "", weight: 0}
    ];
  }
});

Template.template_name.rendered = function () {
  $("#wordCloud").awesomeCloud({
    "size" : {
      "grid" : 16,
      "factor" : 3
    },
    "color": {
      "start": "#9e9e9e",
      "end": "#000000"
    },
    "options" : {
      "color" : "gradient",
      "rotationRatio" : 0.35
    },
    "font" : "'Times New Roman', Times, serif",
    "shape" : "circle"
  });
}
```
