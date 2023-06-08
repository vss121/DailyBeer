function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: {lat: 36.6283933, lng: 127.459223},
        scrollwheel: true
    });

    for(let i=0; i<Location_GS25.length; i++) {
        let marker = new google.maps.Marker({
            map: map,
            // label: Location_GS25[i].place,
            position: Location_GS25[i],
            icon: new google.maps.MarkerImage("../img/gs25.png"),
        });
    }
    for(let i=0; i<Location_CU.length; i++) {
        let marker = new google.maps.Marker({
            map: map,
            // label: Location_CU[i].place,
            position: Location_CU[i],
            icon: new google.maps.MarkerImage("../img/cu.png"),
        });
    }
    for(let i=0; i<Location_SEVEN.length; i++) {
        let marker = new google.maps.Marker({
            map: map,
            // label: Location_SEVEN[i].place,
            position: Location_SEVEN[i],
            icon: new google.maps.MarkerImage("../img/seven.png"),
        });
    }
}

const Location_GS25 = [{place: "GS25가경파크점",	lng: 127.43268642,	lat: 36.62760713},
                        {place: "GS25가경한마음점",	lng: 127.44124805,	lat: 36.62338487},
                        {place: "GS25M15점",	lng: 127.43088606,	lat: 36.65348123},
                        {place: "GS25강서베리굿점",	lng: 127.4280193,	lat: 36.6236916},
                        {place: "GS25가경하나점",	lng: 127.43301098,	lat: 36.62298547},
                        {place: "GS25가경프라임점",	lng: 127.42937125,	lat: 36.62532927},
                        {place: "GS25강내예가점",	lng: 127.36400414,	lat: 36.62316885},
                        {place: "GS25강서중앙점",	lng: 127.42533662,	lat: 36.62511161},
                        {place: "GS25가경행복점",	lng: 127.43619088,	lat: 36.63002099},
                        {place: "GS25가경세원점",	lng: 127.43886019,	lat: 36.62735699},
                        {place: "GS25가경대로점",	lng: 127.43773023,	lat: 36.62590973},
                        {place: "GS25개신주공점",	lng: 127.44865595,	lat: 36.62248211},
                        {place: "GS25개신한솔점",	lng: 127.46706762,	lat: 36.62444941},
                        {place: "GS25개신3단지점",	lng: 127.4459613,	lat: 36.62094657},
                        {place: "GS25",	lng: 127.51590125,	lat: 36.62142246}];

const Location_CU = [{place:"CU충북생활관점", lng: 127.454869, lat: 36.6275179 }, 
                    {place:"CU청주창신점", lng: 127.463317, lat: 36.6343430 }, 
                    {place:"CU청주개신성은점", lng: 127.464447, lat: 36.6268683 }, 
                    {place:"CU청주복대민들레점", lng: 127.455163, lat: 36.6338516 }, 
                    {place:"CU청주개신오거리점", lng: 127.463999, lat: 36.6249776 }, 
                    {place:"CU청주창신점", lng: 127.463317, lat: 36.6343430 }, 
                    {place:"CU청주개신원룸점", lng: 127.462893, lat: 36.6287847 }, 
                    {place:"CU충북대중문점", lng: 127.458025, lat: 36.6337866 }, 
                    {place:"CU충북대사랑점", lng: 127.456504, lat: 36.6317739 }, 
                    {place:"CU충북대공원점", lng: 127.459604, lat: 36.6323298 }];

const Location_SEVEN = [{place:"세븐일레븐 충북대뉴중문점", lng: 127.458144, lat: 36.6330022 },
                        {place:"세븐일레븐 충북대포커스점", lng: 127.449930, lat: 36.6298975 },
                        {place:"세븐일레븐 복대타운점", lng: 127.448378, lat: 36.6282363 },
                        {place:"세븐일레븐 충북대학연산점", lng: 127.459223, lat: 36.6283933 },
                        {place:"세븐일레븐 청주개신월드점", lng: 127.463481, lat: 36.6279804 },
                        {place:"세븐일레븐 충북대후문점", lng: 127.460236, lat: 36.6314082 },
                        {place:"세븐일레븐 충북대월드점", lng: 127.457119, lat: 36.6318076 },
                        {place:"세븐일레븐 충북대사거리점", lng: 127.453374, lat: 36.6338044 },
                        {place:"세븐일레븐 청주사창동아점", lng: 127.456418, lat: 36.6342073 },
                        {place:"세븐일레븐 청주복대성당점", lng: 127.450350, lat: 36.6328156 }];

window.initMap = initMap;

