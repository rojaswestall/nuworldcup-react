import React, { Component } from 'react';
import KnockoutGame from './KnockoutGame';

class KnockoutStage extends Component {
    render() {
		return (

			<div>

				<div className="bracket-title">Women's World Cup 2018</div>

				<div className="bracket-container">
				  <div className="tournament-bracket tournament-bracket--rounded">
				  	<div className="tournament-bracket__round tournament-bracket__round--quarterfinals">
				      <h3 className="tournament-bracket__round-title">Semi-Finals</h3>
				      <ul className="tournament-bracket__list">
				      	<KnockoutGame game="1" field="4" time="11:20am" tournament="co-rec"/>
				        <KnockoutGame game="2" field="5" time="11:20am" tournament="co-rec"/>
				      </ul>
				    </div>
				    <div className="tournament-bracket__round tournament-bracket__round--quarterfinals">
				      <h3 className="tournament-bracket__round-title">Championship</h3>
				      <ul className="tournament-bracket__list">
				      	<KnockoutGame game="3" field="4" time="12:40pm" tournament="co-rec"/>
				      </ul>
				    </div>
				  </div>
				</div>

				<div className="bracket-title-top-space">Co-Rec World Cup 2018</div>

				<div className="bracket-container">
				  <div className="tournament-bracket tournament-bracket--rounded">

				    <div className="tournament-bracket__round tournament-bracket__round--quarterfinals">
				      <h3 className="tournament-bracket__round-title">Round of 16</h3>
				      <ul className="tournament-bracket__list">
				        <KnockoutGame game="5" field="5" time="2:40pm" tournament="co-rec"/>
				        <KnockoutGame game="6" field="6" time="2:40pm" tournament="co-rec"/>
				        <KnockoutGame game="7" field="7" time="2:40pm" tournament="co-rec"/>
				        <KnockoutGame game="8" field="5" time="3:20pm" tournament="co-rec"/>
				        <KnockoutGame game="9" field="6" time="3:20pm" tournament="co-rec"/>
				        <KnockoutGame game="10" field="7" time="3:20pm" tournament="co-rec"/>
				        <KnockoutGame game="11" field="5" time="4:00pm" tournament="co-rec"/>
				        <KnockoutGame game="12" field="6" time="4:00pm" tournament="co-rec"/>
				      </ul>
				    </div>

				    <div className="tournament-bracket__round tournament-bracket__round--quarterfinals">
				      <h3 className="tournament-bracket__round-title">Quarterfinals</h3>
				      <ul className="tournament-bracket__list">
				        <KnockoutGame game="13" field="1" time="5:20pm" tournament="co-rec"/>
				        <KnockoutGame game="14" field="3" time="5:20pm" tournament="co-rec"/>
				        <KnockoutGame game="15" field="1" time="6:00pm" tournament="co-rec"/>
				        <KnockoutGame game="16" field="3" time="6:00pm" tournament="co-rec"/>
				      </ul>
				    </div>

				    <div className="tournament-bracket__round tournament-bracket__round--quarterfinals">
				      <h3 className="tournament-bracket__round-title">Semi-Finals</h3>
				      <ul className="tournament-bracket__list" tournament="co-rec">
				        <KnockoutGame game="17" field="1" time="7:20pm" tournament="co-rec"/>
				        <KnockoutGame game="18" field="3" time="7:20pm" tournament="co-rec"/>
				      </ul>
				    </div>

				    <div className="tournament-bracket__round tournament-bracket__round--gold">
				      <h3 className="tournament-bracket__round-title">Championship</h3>
				      <ul className="tournament-bracket__list">
				        <KnockoutGame game="19" field="1" time="8:40pm" tournament="co-rec"/>
				      </ul>
				    </div>
				  </div>
				</div>
			</div>

	    );
	}
}

export default KnockoutStage;





// <div className="tournament-bracket__round tournament-bracket__round--quarterfinals">
//   <h3 className="tournament-bracket__round-title">Round of 32</h3>
//   <ul className="tournament-bracket__list">
//     <KnockoutGame team1="" team2="" field="1" time=""/>
//     <KnockoutGame team1="" team2="" field="2" time=""/>
//     <KnockoutGame team1="" team2="" field="3" time=""/>
//     <KnockoutGame team1="" team2="" field="4" time=""/>
//     <KnockoutGame team1="" team2="" field="5" time=""/>
//     <KnockoutGame team1="" team2="" field="6" time=""/>
//     <KnockoutGame team1="" team2="" field="1" time=""/>
//     <KnockoutGame team1="" team2="" field="2" time=""/>
//     <KnockoutGame team1="" team2="" field="3" time=""/>
//     <KnockoutGame team1="" team2="" field="4" time=""/>
//     <KnockoutGame team1="" team2="" field="5" time=""/>
//     <KnockoutGame team1="" team2="" field="6" time=""/>
//     <KnockoutGame team1="" team2="" field="7" time=""/>
//     <KnockoutGame team1="" team2="" field="8" time=""/>
//     <KnockoutGame team1="" team2="" field="9" time=""/>
//     <KnockoutGame team1="" team2="" field="10" time=""/>
//   </ul>
// </div>