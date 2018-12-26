
//获取当前位置坐标
function getLocation( callback ) {
    wx.getLocation( {
        success: function( res ) {
            callback( res.latitude, res.longitude );
        }
    })

}

function getLocationAndOpenMap( callback ) {

    wx.getLocation( {
        type: 'gcj02', //返回可以用于wx.openLocation的经纬度
        success: function( res ) {
            var latitude = res.latitude
            var longitude = res.longitude
            console.log(res)
            wx.openLocation( {
                latitude: latitude,
                longitude: longitude,
                scale: 28
            })
        }
    })
}

function getLocationPois( callback ) {

    wx.getLocation( {
        type: 'gcj02', //返回可以用于wx.openLocation的经纬度
        success: function( res ) {
            var latitude = res.latitude
            var longitude = res.longitude
            getPoisByLocation( latitude, longitude, callback )
        }
    })

}

//根据url获取缺省pois数据
function getDefaultPoiData( url, callback ) {
    wx.request( {
        url: url,
        success: function( res ) {
            callback( res );
        }
    });
}

//获取某个坐标的地址和周边的pois信息
function getPoisByLocation( latitude, longitude, callback ) {

    //具体json返回格式可自行参考腾讯地图API接口文档
    var key = "OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77";
    var url = "https://apis.map.qq.com/ws/geocoder/v1/?location=" + latitude + "," + longitude + "?&key="+key+"&get_poi=1";
    var defaultUrl = "http://www.apayado.com/pois.json?" + new Date().getTime();

    wx.request( {
        url: defaultUrl,
        success: function( res ) {
            callback( res.data.result );
        },
        fail: function( res ) {
            getDefaultPoiData( defaultUrl, function( res ) {
                callback( res );
            });
        }

    });

}


module.exports = {
    getLocation: getLocation,
    getLocationAndOpenMap: getLocationAndOpenMap,
    getLocationPois: getLocationPois
}


