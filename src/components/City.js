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
        'Decentralized exchanges is the most secure concept for the asset operations. Absence of the centralized management unit is your guarantee. Current implementations of dexes are slow, expensive and very questionable. Oracle system is a tool needed for such concept to work.',//stock
        'One of the platforms we are widely using to place our products on is Ethereum. We consider it as a very perspective platform for the DAPP creation. A part of our multichain token will be placed in that network which will allow a wide audience to easily use it with the comfortable tools for them.',//etherium
        'Smart-contracts can be used across whole modern financial system. Banking is not an exception. Trustless loans or deposits where bank going bankrupt or having a really bad mood can’t stop any process. Code is your security, Oracle is a kickstarter for such system.',//bank
        'The first platform on which we have released our Oracles is EOSio. A powerful new generation blockchain with an impressive wideness of the development opportunities. Ducatur Oracles are ready to use there and we are not planning to stop. Also, this is a part of our multichain token.',//eos
        'Our partnership with stocks allows us to bring their betting model into the crypto sphere. In synergy with crypto and stock price oracles we are creating an interesting financial tool. Moreover, Stox is a strategic partner for us with which we exchange the experience to create better products.',//stox
        'Ducatur team is constantly increasing the knowledge base. Our RnD team constantly explores the market, finds new ways of upgrading the sphere and creates amazing products for the community to use. Constant self-modification is the key.',//research
        'Gambling and betting can have a new life with a decentralized logic. Ducatur has already provided tools for that with EOS Oracles for crypto prices and random data. These spheres will become transparent and fair for every possible use, giving more prospects on self-regulation of the sphere.',//casino
        'Modern education sphere has lots of problems. Online part of it is not rewarding for the teacher and in consequence is not so effective for the people seeking knowledge online. Decentralized systems can bring a new life to this sphere through avoiding the middlemen and bringing the transparency, as well as freedom of choice. Oracle is the essential part of it to work. ',//school
    ]

    componentDidMount() {
        imageMapResize()
        document.addEventListener('scroll', () => this.setState({ show: false }))
    }
    city_map = {
        name: "city_map",
        areas: [
            { shape: "poly", coords: [470,848,470,365,549,315,633,365,635,846,547,895] },//stock
            { shape: "poly", coords: [256,1204,256,720,332,671,418,722,418,1201,337,1251] },//eterium
            { shape: "poly", coords: [828,1058,772,1024,771,976,836,933,835,868,939,804,978,824,999,816,1004,841,1021,831,1082,866,1082,912,1009,954,1013,977,932,1024,904,1018] },//bank
            { shape: "poly", coords: [1132,584,1131,101,1146,91,1147,64,1173,76,1215,52,1294,99,1294,565,1252,587,1252,607,1213,627] },//eos
            { shape: "poly", coords: [1252,930,1250,584,1294,562,1337,589,1336,937,1297,959] },//stox
            { shape: "poly", coords: [342,1399,342,1327,463,1256,631,1352,630,1426,628,1441,535,1497,517,1488,505,1494] },//research
            { shape: "poly", coords: [814,1431,813,1352,880,1317,927,1282,1021,1349,1043,1337,1053,1347,1053,1361,1062,1377,1052,1384,1053,1435,1060,1451,973,1505,956,1497,944,1505] },//casino
            { shape: "poly", coords: [1479,1039,1477,949,1596,880,1721,954,1714,979,1761,1004,1758,1063,1640,1134] },//school
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
