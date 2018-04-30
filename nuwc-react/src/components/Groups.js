import React, { Component } from 'react';
import GroupScores from './GroupScores';

class Groups extends Component {
    render() {
		return (
				<div className="container">
					<hr />
					<div className="fixture-title"> Fixtures </div>
					<div className="bracket-title-top-space">Co-Rec World Cup 2018</div>
					<div className="group">
						<div className="group-header">Group A</div>
						<GroupScores team1="Mozambique" flag1="mz" team2="Mexico" flag2="mx" tournament="co-rec" field="1" time="May 4, 5:00PM"/>
						<GroupScores team1="Brazil" flag1="br" team2="Mongolia" flag2="mn" tournament="co-rec" field="4" time="May 4, 5:00PM"/>
						<GroupScores team1="Mozambique" flag1="mz" team2="Brazil" flag2="br" tournament="co-rec" field="7" time="May 4, 7:40PM"/>
						<GroupScores team1="Mexico" flag1="mx" team2="Mongolia" flag2="mn" tournament="co-rec" field="1" time="May 4, 7:40PM"/>
						<GroupScores team1="Mozambique" flag1="mz" team2="Mongolia" flag2="mn" tournament="co-rec" field="4" time="May 5, 9:20AM"/>
						<GroupScores team1="Mexico" flag1="mx" team2="Brazil" flag2="br" tournament="co-rec" field="7" time="May 5, 9:20AM"/>
					</div>
					<div className="group">
						<div className="group-header">Group B</div>
						<GroupScores team1="St. Lucia" flag1="lc" team2="Sweden" flag2="se" tournament="co-rec" field="5" time="May 4, 5:00PM"/>
						<GroupScores team1="Italy" flag1="it" team2="Kazakhstan" flag2="kz" tournament="co-rec" field="6" time="May 4, 5:00PM"/>
						<GroupScores team1="St. Lucia" flag1="lc" team2="Italy" flag2="it" tournament="co-rec" field="9" time="May 4, 7:40PM"/>
						<GroupScores team1="Sweden" flag1="se" team2="Kazakhstan" flag2="kz" tournament="co-rec" field="1" time="May 4, 8:40PM"/>
						<GroupScores team1="St. Lucia" flag1="lc" team2="Kazakhstan" flag2="kz" tournament="co-rec" field="3" time="May 5, 9:50AM"/>
						<GroupScores team1="Sweden" flag1="se" team2="Italy" flag2="it" tournament="co-rec" field="4" time="May 5, 9:50AM"/>
					</div>
					<div className="group">
						<div className="group-header">Group C</div>
						<GroupScores team1="Belarus" flag1="by" team2="Sierra Leone" flag2="sl" tournament="co-rec" field="1" time="May 4, 5:40PM"/>
						<GroupScores team1="Djibouti" flag1="dj" team2="St. Kitts & Nevis" flag2="kn" tournament="co-rec" field="4" time="May 4, 5:40PM"/>
						<GroupScores team1="Belarus" flag1="by" team2="Djibouti" flag2="dj" tournament="co-rec" field="7" time="May 4, 8:20PM"/>
						<GroupScores team1="Sierra Leone" flag1="sl" team2="St. Kitts & Nevis" flag2="kn" tournament="co-rec" field="9" time="May 4, 8:20PM"/>
						<GroupScores team1="Belarus" flag1="by" team2="St. Kitts & Nevis" flag2="kn" tournament="co-rec" field="5" time="May 5, 9:20AM"/>
						<GroupScores team1="Sierra Leone" flag1="sl" team2="Djibouti" flag2="dj" tournament="co-rec" field="6" time="May 5, 9:20AM"/>
					</div>
					<div className="group">
						<div className="group-header">Group D</div>
						<GroupScores team1="Nigeria" flag1="ng" team2="Cameroon" flag2="cm" tournament="co-rec" field="5" time="May 4, 5:40PM"/>
						<GroupScores team1="Hong Kong" flag1="hk" team2="Armenia" flag2="am" tournament="co-rec" field="6" time="May 4, 5:40PM"/>
						<GroupScores team1="Nigeria" flag1="ng" team2="Hong Kong" flag2="hk" tournament="co-rec" field="9" time="May 4, 8:20PM"/>
						<GroupScores team1="Cameroon" flag1="cm" team2="Armenia" flag2="am" tournament="co-rec" field="1" time="May 4, 9:00PM"/>
						<GroupScores team1="Nigeria" flag1="ng" team2="Armenia" flag2="am" tournament="co-rec" field="7" time="May 5, 9:20AM"/>
						<GroupScores team1="Cameroon" flag1="cm" team2="Hong Kong" flag2="hk" tournament="co-rec" field="8" time="May 5, 9:20AM"/>
					</div>
					<div className="group">
						<div className="group-header">Group E</div>
						<GroupScores team1="Andorra" flag1="ad" team2="Nicaragua" flag2="ni" tournament="co-rec" field="1" time="May 4, 6:20PM"/>
						<GroupScores team1="Vietnam" flag1="vn" team2="Germany" flag2="de" tournament="co-rec" field="4" time="May 4, 6:20PM"/>
						<GroupScores team1="Andorra" flag1="ad" team2="Vietnam" flag2="vn" tournament="co-rec" field="7" time="May 4, 9:00PM"/>
						<GroupScores team1="Nicaragua" flag1="ni" team2="Germany" flag2="de" tournament="co-rec" field="8" time="May 4, 9:00PM"/>
						<GroupScores team1="Andorra" flag1="ad" team2="Germany" flag2="de" tournament="co-rec" field="9" time="May 5, 9:20AM"/>
						<GroupScores team1="Nicaragua" flag1="ni" team2="Vietnam" flag2="vn" tournament="co-rec" field="1" time="May 5, 10:00AM"/>
					</div>
					<div className="group">
						<div className="group-header">Group F</div>
						<GroupScores team1="Iran" flag1="ir" team2="China" flag2="cn" tournament="co-rec" field="5" time="May 4, 6:20PM"/>
						<GroupScores team1="USA" flag1="us" team2="Taiwan" flag2="tw" tournament="co-rec" field="6" time="May 4, 6:20PM"/>
						<GroupScores team1="Iran" flag1="ir" team2="USA" flag2="us" tournament="co-rec" field="9" time="May 4, 9:00PM"/>
						<GroupScores team1="China" flag1="cn" team2="Taiwan" flag2="tw" tournament="co-rec" field="1" time="May 5, 8:40AM"/>
						<GroupScores team1="Iran" flag1="ir" team2="Taiwan" flag2="tw" tournament="co-rec" field="2" time="May 5, 10:00AM"/>
						<GroupScores team1="China" flag1="cn" team2="USA" flag2="us" tournament="co-rec" field="3" time="May 5, 10:00AM"/>
					</div>
					<div className="group">
						<div className="group-header">Group G</div>
						<GroupScores team1="Lebanon" flag1="lb" team2="Denmark" flag2="dk" tournament="co-rec" field="1" time="May 4, 7:00PM"/>
						<GroupScores team1="Bulgaria" flag1="bg" team2="Ecuador" flag2="ec" tournament="co-rec" field="4" time="May 4, 7:00PM"/>
						<GroupScores team1="Lebanon" flag1="lb" team2="Bulgaria" flag2="bg" tournament="co-rec" field="2" time="May 5, 8:40AM"/>
						<GroupScores team1="Denmark" flag1="dk" team2="Ecuador" flag2="ec" tournament="co-rec" field="3" time="May 5, 8:40AM"/>
						<GroupScores team1="Lebanon" flag1="lb" team2="Ecuador" flag2="ec" tournament="co-rec" field="4" time="May 5, 10:00AM"/>
						<GroupScores team1="Denmark" flag1="dk" team2="Bulgaria" flag2="bg" tournament="co-rec" field="5" time="May 5, 10:00AM"/>
					</div>
					<div className="group">
						<div className="group-header">Group H</div>
						<GroupScores team1="Poland" flag1="pl" team2="Croatia" flag2="hr" tournament="co-rec" field="5" time="May 4, 7:40PM"/>
						<GroupScores team1="France" flag1="fr" team2="Colombia" flag2="co" tournament="co-rec" field="6" time="May 4, 7:40PM"/>
						<GroupScores team1="Poland" flag1="pl" team2="France" flag2="fr" tournament="co-rec" field="4" time="May 5, 8:40AM"/>
						<GroupScores team1="Croatia" flag1="hr" team2="Colombia" flag2="co" tournament="co-rec" field="5" time="May 5, 8:40AM"/>
						<GroupScores team1="Poland" flag1="pl" team2="Colombia" flag2="co" tournament="co-rec" field="6" time="May 5, 10:00AM"/>
						<GroupScores team1="Croatia" flag1="hr" team2="France" flag2="fr" tournament="co-rec" field="7" time="May 5, 10:00AM"/>
					</div>
					<div className="group">
						<div className="group-header">Group I</div>
						<GroupScores team1="Canada" flag1="ca" team2="South Korea" flag2="kr" tournament="co-rec" field="1" time="May 4, 7:40PM"/>
						<GroupScores team1="Saudi Arabia" flag1="sa" team2="Chad" flag2="td" tournament="co-rec" field="4" time="May 4, 7:40PM"/>
						<GroupScores team1="Canada" flag1="ca" team2="Saudi Arabia" flag2="sa" tournament="co-rec" field="6" time="May 5, 8:40AM"/>
						<GroupScores team1="South Korea" flag1="kr" team2="Chad" flag2="td" tournament="co-rec" field="7" time="May 5, 8:40AM"/>
						<GroupScores team1="Canada" flag1="ca" team2="Chad" flag2="td" tournament="co-rec" field="8" time="May 5, 10:00AM"/>
						<GroupScores team1="South Korea" flag1="kr" team2="Saudi Arabia" flag2="sa" tournament="co-rec" field="9" time="ay 5, 10:00AM"/>
					</div>
					<div className="group">
						<div className="group-header">Group J</div>
						<GroupScores team1="Iceland" flag1="is" team2="Peru" flag2="pe" tournament="co-rec" field="5" time="May 4, 7:40PM"/>
						<GroupScores team1="Israel" flag1="il" team2="India" flag2="in" tournament="co-rec" field="6" time="May 4, 7:40PM"/>
						<GroupScores team1="Iceland" flag1="is" team2="Israel" flag2="il" tournament="co-rec" field="8" time="May 5, 8:40AM"/>
						<GroupScores team1="Peru" flag1="pe" team2="India" flag2="in" tournament="co-rec" field="9" time="May 5, 8:40AM"/>
						<GroupScores team1="Iceland" flag1="is" team2="India" flag2="in" tournament="co-rec" field="6" time="May 5, 10:40AM"/>
						<GroupScores team1="Peru" flag1="pe" team2="Israel" flag2="il" tournament="co-rec" field="7" time="May 5, 10:40AM"/>
					</div>

			    </div>

	    );
	}
}

export default Groups;


// <div className="group">
// 	<div className="group-header">Group A</div>
// 	<GroupScores team1="" flag1="" team2="" flag2="" tournament="co-rec" field="" time=""/>
// 	<GroupScores team1="" flag1="" team2="" flag2="" tournament="co-rec" field="" time=""/>
// 	<GroupScores team1="" flag1="" team2="" flag2="" tournament="co-rec" field="" time=""/>
// 	<GroupScores team1="" flag1="" team2="" flag2="" tournament="co-rec" field="" time=""/>
// 	<GroupScores team1="" flag1="" team2="" flag2="" tournament="co-rec" field="" time=""/>
// 	<GroupScores team1="" flag1="" team2="" flag2="" tournament="co-rec" field="" time=""/>
// </div>



// FOR FUTURE: Write a js function that will loop over an array of the information and populate it using GroupScores
// Pull from database??? Then regular wc users can just update the database with some interface. Maybe a login for execs??
// LOOP FOR NUM GROUPS
// <div className="group">
// 		<div className="group-header">Group </div>
// 		LOOP for game in the groups
//		<GroupScores ...fill in with array...>
// </div>
