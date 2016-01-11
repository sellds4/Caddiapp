var React = require('react-native');

var {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} = React;

var CalendarStyle = require('./styles/CalendarStyle'),
    MainStyle = require('.././styles/MainStyle');

var maxWidth = 467;
var cb = null;

var _getDisjointed = function(events) {
    var grouped = [];
    while(events.length) {
        for (var i = 0; i < events.length; ++i) {
            var a = events.shift();
            var g = [a];
            for (var j = 0; j < events.length; j++) {
                var b = events[j];
                var overlap = false;
                for (var k = 0; k < g.length; k++) {
                    var c = g[k];
                    if ((b.start >= c.start && b.start < c.end) || (b.end <= c.end && b.end > c.start)
                            || (c.start >= b.start && c.start < b.end) || (c.end <= b.end && c.end > b.start)) {
                        overlap = true;
                        break;
                    }
                }
                if (!overlap) {
                    g.push(b);
                    events.splice(j, 1);
                    --j;
                }
            }
            grouped.push(g);
        }
    }
    return grouped;
};

 var Calendar = React.createClass({
     render: function() {
         return (
            <View style={CalendarStyle.background}>
                <ScrollView>
                    <View style={MainStyle.flexRow}>
                        <View style={CalendarStyle.timeColumn}>
                            <View style={CalendarStyle.calendarRowWrapper}>
                                <Text style={CalendarStyle.hour}>6AM</Text>
                            </View>
                            <View style={CalendarStyle.calendarRowWrapper}>
                                <Text style={CalendarStyle.hour}>7AM</Text>
                            </View>
                            <View style={CalendarStyle.calendarRowWrapper}>
                                <Text style={CalendarStyle.hour}>8AM</Text>
                            </View>
                            <View style={CalendarStyle.calendarRowWrapper}>
                                <Text style={CalendarStyle.hour}>9AM</Text>
                            </View>
                            <View style={CalendarStyle.calendarRowWrapper}>
                                <Text style={CalendarStyle.hour}>10AM</Text>
                            </View>
                            <View style={CalendarStyle.calendarRowWrapper}>
                                <Text style={CalendarStyle.hour}>11AM</Text>
                            </View>
                            <View style={CalendarStyle.calendarRowWrapper}>
                                <Text style={CalendarStyle.hour}>12PM</Text>
                            </View>
                            <View style={CalendarStyle.calendarRowWrapper}>
                                <Text style={CalendarStyle.hour}>1PM</Text>
                            </View>
                            <View style={CalendarStyle.calendarRowWrapper}>
                                <Text style={CalendarStyle.hour}>2PM</Text>
                            </View>
                            <View style={CalendarStyle.calendarRowWrapper}>
                                <Text style={CalendarStyle.hour}>3PM</Text>
                            </View>
                            <View style={CalendarStyle.calendarRowWrapper}>
                                <Text style={CalendarStyle.hour}>4PM</Text>
                            </View>
                            <View style={CalendarStyle.calendarRowWrapper}>
                                <Text style={CalendarStyle.hour}>5PM</Text>
                            </View>
                            <View style={CalendarStyle.calendarRowWrapper}>
                                <Text style={CalendarStyle.hour}>6PM</Text>
                            </View>
                            <View style={CalendarStyle.calendarRowWrapper}>
                                <Text style={CalendarStyle.hour}>7PM</Text>
                            </View>
                            <View style={CalendarStyle.calendarRowWrapper}>
                                <Text style={CalendarStyle.hour}>8PM</Text>
                            </View>
                            <View style={CalendarStyle.calendarRowWrapper}>
                                <Text style={CalendarStyle.hour}>9PM</Text>
                            </View>
                            <View style={CalendarStyle.calendarRowWrapper}>
                                <Text style={CalendarStyle.hour}>10PM</Text>
                            </View>
                        </View>
                        <View style={MainStyle.flexColumn}>
                            <View style={CalendarStyle.calendarRowWrapper}>
                            </View>
                            <View style={CalendarStyle.calendarRowWrapper}>
                            </View>
                            <View style={CalendarStyle.calendarRowWrapper}>
                            </View>
                            <View style={CalendarStyle.calendarRowWrapper}>
                            </View>
                            <View style={CalendarStyle.calendarRowWrapper}>
                            </View>
                            <View style={CalendarStyle.calendarRowWrapper}>
                            </View>
                            <View style={CalendarStyle.calendarRowWrapper}>
                            </View>
                            <View style={CalendarStyle.calendarRowWrapper}>
                            </View>
                            <View style={CalendarStyle.calendarRowWrapper}>
                            </View>
                            <View style={CalendarStyle.calendarRowWrapper}>
                            </View>
                            <View style={CalendarStyle.calendarRowWrapper}>
                            </View>
                            <View style={CalendarStyle.calendarRowWrapper}>
                            </View>
                            <View style={CalendarStyle.calendarRowWrapper}>
                            </View>
                            <View style={CalendarStyle.calendarRowWrapper}>
                            </View>
                            <View style={CalendarStyle.calendarRowWrapper}>
                            </View>
                            <View style={CalendarStyle.calendarRowWrapper}>
                            </View>
                            <View style={CalendarStyle.calendarRowWrapper}>
                            </View>
                            <TouchableOpacity style={CalendarStyle.event}>
                                <View>
                                    <Text>Test Event</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                   </View>
                </ScrollView>
                <TouchableOpacity style={CalendarStyle.addEventButton}>
                    <View></View>
                </TouchableOpacity>
            </View>
        );
    }
});

// var Day = React.createClass({
//     getInitialState: function() {
//         return {
//             events: [
//                 [{start: 30, end: 150}],
//                 [{start: 540, end: 600}, {start: 560, end: 620}, {start: 610, end: 670}]
//             ]
//         }
//     },

//     componentDidMount: function() {
//         cb = this.handleEvents;
//     },

//     handleEvents: function(events) {
//         this.setState({
//             events: events
//         });
//     },

//     render: function() {
//         return (
//             <div className="day">
//                 {this.state.events.map(function(group, idx) {
//                     return <EventGroup events={group} key={idx} />
//                 })}
//             </div>
//         );
//     }
// });

// var EventGroup = React.createClass({
//     render: function() {
//         var events = this.props.events.sort(function(a, b) {
//             return a.start - b.start;
//         });
//         var disjointed = _getDisjointed(events);
//         var eventWidth = maxWidth / disjointed.length;
//         var events = [];

//         disjointed.forEach(function(g, idx) {
//             events.push(g.map(function(e, idx2) {
//                 var eventStyle = {
//                     width: (eventWidth - 2) + 'px',
//                     height: (e.end - e.start - 2) + 'px',
//                     position: 'absolute',
//                     top: e.start + 'px',
//                     left: (idx * eventWidth) + 'px',
//                     backgroundColor: '#fff',
//                     border: '1px solid #ccc',
//                     minHeight: '30px'
//                 };
//                 var eventInfoStyle = {
//                     borderLeft: '4px solid #3B5999',
//                     padding: ((e.end - e.start - 22) > 20 ? 10 : 3) + 'px',
//                     height: (e.end - e.start - 22) + 'px',
//                     minHeight: '25px'
//                 };
//                 return (
//                     <div style={eventStyle} key={idx + '-' + idx2}>
//                         <div style={eventInfoStyle}>
//                             <h3 className="event-info-name">{e.name ? e.name : 'Sample Item'}</h3>
//                             <p className="event-info-location">{e.location ? e.location : 'Sample Location'}</p>
//                         </div>
//                     </div>
//                 );
//             }));
//         });
//         return (
//             <div style={{position: 'relative'}}>{events}</div>
//         );
//     }
// });

// globalScope.layOutDay = function(events) {
//     events.sort(function(a, b) {
//         return a.start - b.start;
//     });

//     var grouped = [];
//     while (events.length) {
//         var e = events.shift();
//         var g = [e];
//         var start = e.start, end = e.end;
//         for (var i = 0; i < events.length; ++i) {
//             var curr = events[i];
//             if ((curr.start >= start && curr.start < end) ||
//                 (curr.end >= start && curr.end <= end)) {
//                     g.push(curr);
//                     events.splice(i, 1);
//                     --i;
//                     if (curr.start < start) {
//                         start = curr.start;
//                     }
//                     if (curr.end > end) {
//                         end = curr.end;
//                     }
//             }
//         }
//         grouped.push(g);
//     }

//     if (cb) {
//         cb(grouped);
//     }
// };

var styles = StyleSheet.create({
        action: {
            alignSelf: 'stretch',
            backgroundColor: '#4CAF50',
            borderRadius: 3,
            flex: 1,
            margin: 5,
            padding: 20,
            shadowColor: 'black',
            shadowOffset: {
                width: 3,
                height: 3
            },
            shadowOpacity: 0.8,
            shadowRadius: 2
        },
        rowWrapper: {
            backgroundColor: 'white',
            flex: 1,
            flexDirection: 'row'
        },
        actionColumn: {
            flex: 1,
            flexDirection: 'column',
        },
        actionSubtext: {
            color: 'white',
            fontSize: 16
        },
        actionText: {
            color: 'white',
            fontSize: 24
        },
        actionTouch: {
            alignSelf: 'stretch',
            flex: 1,
        },
        background: {
            alignSelf: 'stretch',
            backgroundColor: 'white',
            flex: 1,
            padding: 5
        }
});

module.exports = Calendar;
