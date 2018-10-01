import React, { Component } from 'react'

export default class Random extends Component {

	toVH = value => value / 1080 * 100 + 'vh'
	toVW = value => value / 1920 * 100 + 'vw'

	render() {
		if (window.innerWidth > 992) return (
			<section style={{ paddingBottom: '50px' }}>
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<div style={{
						boxShadow: 'none', zIndex: 4, width: this.toVW(800), minWidth: '500px', height: this.toVH(580), position: 'relative', padding: '50px', marginRight: '50px'
					}} className="card">
						<code style={{ whiteSpace: 'pre-line', textTransform: 'uppercase' }}>
							{`
							#include <string>
							#include <eosiolib/eosio.hpp>
							#include <eosiolib/action.hpp>
							#include <eosiolib/singleton.hpp>
							#include <eosiolib/time.hpp>
							#include <eosiolib/system.h>

							using namespace eosio;
							using std::string;
							template <uint64_t OraclizeName, uint32_t BestBeforeOffset,
							class oraclized
							`}
						</code>
					</div>
					<div className="card_no_hover" style={{ width: this.toVW(520), height: this.toVH(580), position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
						<h1>Instructions</h1>
						<div style={{ textAlign: 'center' }}>
							<p style={{ whiteSpace: 'pre-line', padding: `0 ${this.toVW(70)}`, textAlign: 'center' }}>{`Copy this code to your smart contract. Use request_data() to request new data from oracle. Data will be pushed to push_data() in the specified format
	
	eos_contract_instructions`}</p>
							<button style={{ marginTop: this.toVH(100), width: 'fit-content', marginLeft: 'auto', marginRight: 'auto' }}>Switch to ETH</button>
						</div>
					</div>
				</div>
				<div style={{ marginTop: this.toVH(70), width: 'fit-content', marginLeft: 'auto', marginRight: 'auto' }} className='action_description'>
					<h1>CONTRACT CODE EOS</h1>
				</div>
			</section>
		)
		else return (
			<section style={{ paddingBottom: '50px' }}>
				<div>
					<div style={{
						boxShadow: 'none', zIndex: 4, minWidth: '0', height: this.toVH(580), position: 'relative', padding: '50px', margin: '0 auto'
					}} className="card">
						<code style={{ whiteSpace: 'pre-line', textTransform: 'uppercase' }}>
							{`
							#include <string>
							#include <eosiolib/eosio.hpp>
							#include <eosiolib/action.hpp>
							#include <eosiolib/singleton.hpp>
							#include <eosiolib/time.hpp>
							#include <eosiolib/system.h>

							using namespace eosio;
							using std::string;
							template <uint64_t OraclizeName, uint32_t BestBeforeOffset,
							class oraclized
							`}
						</code>
					</div>
					<div className="card_no_hover" style={{ height: this.toVH(580), position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '30px auto' }}>
						<h1>Instructions</h1>
						<div style={{ textAlign: 'center' }}>
							<p style={{ whiteSpace: 'pre-line', padding: `0 ${this.toVW(70)}`, textAlign: 'center' }}>{`Copy this code to your smart contract. Use request_data() to request new data from oracle. Data will be pushed to push_data() in the specified format
	
	eos_contract_instructions`}</p>
							<button style={{ marginTop: this.toVH(100), width: 'fit-content', marginLeft: 'auto', marginRight: 'auto' }}>Switch to ETH</button>
						</div>
					</div>
				</div>
				<div style={{ marginTop: this.toVH(70), width: 'fit-content', marginLeft: 'auto', marginRight: 'auto' }} className='action_description'>
					<h1>CONTRACT CODE EOS</h1>
				</div>
			</section>
		)
	}
}
