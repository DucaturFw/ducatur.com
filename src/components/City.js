import React, { Component } from 'react'

import ImageMapper from 'react-image-mapper'
import imageMapResize from 'image-map-resizer'

import city from '../resourses/City_stage.png';
import PopupDetails from './controls/popupDetails';

export default class City extends Component {

    constructor(props) {
        super(props)

        this.state = {
            building: null,
            show: false,
            xPos: 0,
            yPos: 0,
        }
    }

    handleBuildingClick = (event, index) => {
        this.setState({ building: index, show: true, xPos: event.clientX, yPos: event.clientY })
    }

    descriptions = [
        'XD is made for fast, fluid UX design with innovative tools that eliminate speed bumps.',
        'XD is made for fast, fluid UX design with innovative tools that eliminate speed bumps.',
        'XD is made for fast, fluid UX design with innovative tools that eliminate speed bumps.',
        'XD is made for fast, fluid UX design with innovative tools that eliminate speed bumps.',
        'XD is made for fast, fluid UX design with innovative tools that eliminate speed bumps.',
        'XD is made for fast, fluid UX design with innovative tools that eliminate speed bumps.',
        'XD is made for fast, fluid UX design with innovative tools that eliminate speed bumps.',
        'XD is made for fast, fluid UX design with innovative tools that eliminate speed bumps.',
    ]

    componentDidMount() {
        imageMapResize()
        document.addEventListener('scroll', () => this.setState({ show: false }))
    }
    city_map = {
        name: "city_map",
        areas: [
            { shape: "poly", coords: [464, 794, 545, 843, 619, 796, 618, 777, 624, 769, 621, 314, 543, 269, 467, 314] },//stock
            { shape: "poly", coords: [231, 689, 307, 644, 386, 696, 388, 1173, 315, 1213, 315, 1198, 297, 1191, 237, 1144] },//eterium
            { shape: "poly", coords: [778, 934, 783, 988, 831, 1010, 902, 972, 924, 968, 935, 978, 1013, 936, 1008, 909, 1077, 872, 1075, 809, 1021, 779, 1000, 775, 980, 782, 943, 765, 845, 819, 848, 890] },//bank
            { shape: "poly", coords: [1136, 46, 1147, 35, 1147, 8, 1177, 19, 1214, 0, 1297, 46, 1295, 510, 1250, 534, 1246, 554, 1216, 568, 1165, 541, 1167, 504, 1135, 480, 1135, 52] },//eos
            { shape: "poly", coords: [1251, 536, 1290, 515, 1327, 541, 1329, 884, 1292, 904, 1251, 882] },//stox
            { shape: "poly", coords: [356, 1298, 349, 1284, 464, 1215, 633, 1308, 628, 1382, 633, 1397, 542, 1450, 521, 1445, 511, 1448, 357, 1360] },//research
            { shape: "poly", coords: [834, 1399, 831, 1330, 898, 1291, 942, 1255, 1038, 1320, 1067, 1308, 1069, 1337, 1075, 1339, 1068, 1356, 1066, 1414, 1074, 1428, 984, 1479, 973, 1467, 959, 1473] },//casino
            { shape: "poly", coords: [1503, 1017, 1500, 928, 1616, 862, 1741, 933, 1740, 958, 1748, 967, 1747, 1059, 1664, 1108] },//school
        ]
    }

    render() {
        return (
            <section id='city' style={{ marginTop: '20vw', position: 'relative', textAlign: 'center', zIndex: '5' }}>
                <ImageMapper src={city} map={this.city_map} height={window.innerWidth < 568 ? window.innerWidth : window.innerHeight * 1.3} strokeColor='red'
                    onClick={(area, index, event) => this.handleBuildingClick(event, index)}
                    onImageClick={() => this.setState({ show: false })}
                    onLoad={() => { document.querySelector('#city > div').style.marginLeft = 'auto'; document.querySelector('#city > div').style.marginRight = 'auto';  }}
                />
                {this.state.show
                    ? <PopupDetails description={this.descriptions[this.state.building]} xPos={this.state.xPos} yPos={this.state.yPos} />
                    : null
                }
            </section>
        )
    }
}
