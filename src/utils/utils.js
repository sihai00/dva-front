export function getUrlParams (url) {
  var uri = url || window.location.href
  var match = uri && uri.match(/([^?=&]+)=([^?&]+)/g)

  return match && match.reduce(function(a, b){
    var val = b.split(/([^?=&]+)=([^?&]+)/g)
    a[val[1]] = val[2]
    return a
  }, {})
}
