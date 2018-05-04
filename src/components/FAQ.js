import React, { Component } from 'react';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import title from '../assets/img/titles/faq-title.png';
import map from '../assets/img/map.png';

class FAQ extends Component {
    render() {

	   	var cardStyle = {
	  		boxShadow: '0 1px 1px rgba(0,0,0,.05)',
	  		border: '1px solid transparent',
	  		borderRadius: '4px',
	  		borderColor: '#ddd',
	  		boxSizing: 'border-box',
	  		marginTop: '5px',
	  		wordWrap: 'break-word'
		};

		var cardResponsive = {
  			flex: '1 1 auto',
  			wordWrap: 'break-word',
  			flexDirection: 'column',
  			display: 'flex',
  			position: 'relative',
  			whiteSpace: 'normal'
		};

		var twoBodies = {
	  		borderBottom: '1px solid',
	  		borderColor: '#ddd'
		};

		return (
			<div>
        		<div className="d-flex justify-content-center title-div">
            		<img className="title" src={title} alt={"FAQ"}/> 
        		</div>

				<div className="container">
					
					<div id="accordion">

						<div className="faqHeader">Field Map</div>
						<div className="d-flex justify-content-center map-div">
            				<img className="field-map" src={map} alt={"map"}/> 
        				</div>

						<div className="faqHeader">Registration</div>

						<div className="card" style={cardStyle}>
							<div className="card-header btn btn-light text-left" style={cardResponsive} id="headingOne" data-parent="#accordion" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
								<div >
									When is registration for NU World Cup 2018 and/or NU Women's World Cup 2018?
								</div>
							</div>
							<div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
								<div className="card-body">
									Registration is  <strong>March 5</strong> at <strong>7 pm</strong>.
								</div>
							</div>
						</div>

						<div className="card" style={cardStyle}>
							<div className="card-header btn btn-light text-left" style={cardResponsive} id="headingTwo" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
								How many players can I register?
							</div>
							<div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
								<div className="card-body" style={twoBodies}>
									For the co-ed tournament, the minimum number of players is <strong>10</strong> and max is <strong>16</strong>.
								</div>
								<div className="card-body">
									For the women's tournament, the minimum number of players is <strong>6</strong>.
								</div>
							</div>
						</div>

						<div className="card" style={cardStyle}>
							<div className="card-header btn btn-light text-left" style={cardResponsive} id="headingThree" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
								What information do I need to register?
							</div>
							<div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
								<div className="card-body">
									If you are the team captain, you will need the names and <strong>emails</strong> of the players that you plan on registering and 3 possible <strong>country names</strong> you would like your team to be called.
								</div>
							</div>
						</div>

						<div className="card" style={cardStyle}>
							<div className="card-header btn btn-light text-left" style={cardResponsive} id="headingFour" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
								What happens if team registration fills up before I register?
							</div>
							<div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
								<div className="card-body">
									Your team will be added to the waitlist. Get to registration quick, it fills up fast! Once 40 teams have registered, we will start a waitlist for all subsequent registrants. We have had teams initially on the waitlist play in the tournament in previous years, so if you're on the wait list, you're not out of luck!
								</div>
							</div>
						</div>

						<div className="card" style={cardStyle}>
							<div className="card-header btn btn-light text-left" style={cardResponsive} id="headingFive" data-toggle="collapse" data-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
								If I don't have a team can I still register for the tournament?
							</div>
							<div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordion">
								<div className="card-body">
									There is <strong>individual player registration</strong> for the Women's tournament! That means that teams that are in need of more players will be calling on you to join them. You can find the registration form for individual registration in the same place as for teams.
								</div>
							</div>
						</div>

						<div className="card" style={cardStyle}>
							<div className="card-header btn btn-light text-left" style={cardResponsive} id="headingSix" data-toggle="collapse" data-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
								Can I play if I don't go to Northwestern?
							</div>
							<div id="collapseSix" className="collapse" aria-labelledby="headingSix" data-parent="#accordion">
								<div className="card-body">
									There is a maximum of <strong>2 non-NU players</strong> per team (Northwestern Alumni count as NU players).
								</div>
							</div>
						</div>

						<div className="card" style={cardStyle}>
							<div className="card-header btn btn-light text-left" style={cardResponsive} id="headingSeven" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="true" aria-controls="collapseSeven">
								Can players switch teams?
							</div>
							<div id="collapseSeven" className="collapse" aria-labelledby="headingSeven" data-parent="#accordion">
								<div className="card-body">
									Team switches will be permitted until the <strong>first week of April</strong>.
								</div>
							</div>
						</div>



						<div className="faqHeader">Game Play</div>

						<div className="card" style={cardStyle}>
							<div className="card-header btn btn-light text-left" style={cardResponsive} id="headingEight" data-parent="#accordion" data-toggle="collapse" data-target="#collapseEight" aria-expanded="true" aria-controls="collapseEight">
								<div >
									How many players can be on the field at once?
								</div>
							</div>
							<div id="collapseEight" className="collapse" aria-labelledby="headingEight" data-parent="#accordion">
								<div className="card-body" style={twoBodies}>
									The co-ed games are run <strong>7 on 7</strong>. If you have less than 5 players than you forfeit the match.
								</div>
								<div className="card-body">
									The women's games are run <strong>5 on 5</strong>.
								</div>
							</div>
						</div>

						<div className="card" style={cardStyle}>
							<div className="card-header btn btn-light text-left" style={cardResponsive} id="headingNine" data-parent="#accordion" data-toggle="collapse" data-target="#collapseNine" aria-expanded="true" aria-controls="collapseNine">
								<div >
									How many club players can play?
								</div>
							</div>
							<div id="collapseNine" className="collapse" aria-labelledby="headingNine" data-parent="#accordion">
								<div className="card-body">
									In the Co-Ed tournament there is a max of <strong>2</strong> (PAST or PRESENT) club players allowed on a team roster. For the Women's tournament there is a max of <strong>3</strong> club players allowed.
								</div>
							</div>
						</div>

						<div className="card" style={cardStyle}>
							<div className="card-header btn btn-light text-left" style={cardResponsive} id="headingTen" data-parent="#accordion" data-toggle="collapse" data-target="#collapseTen" aria-expanded="true" aria-controls="collapseTen">
								<div >
									Can a player play in the Co-Rec and Women's tournament?
								</div>
							</div>
							<div id="collapseTen" className="collapse" aria-labelledby="headingTen" data-parent="#accordion">
								<div className="card-body">
									Yes! That's allowed, but if both your teams are playing at the same time you will have to choose to play for only one.
								</div>
							</div>
						</div>




						<div className="faqHeader">General</div>

						<div className="card" style={cardStyle}>
							<div className="card-header btn btn-light text-left" style={cardResponsive} id="headingEleven" data-parent="#accordion" data-toggle="collapse" data-target="#collapseEleven" aria-expanded="true" aria-controls="collapseEleven">
								<div >
									How much does it cost to play?
								</div>
							</div>
							<div id="collapseEleven" className="collapse" aria-labelledby="headingEleven" data-parent="#accordion">
								<div className="card-body">
									For the Co-ed tournament each player pays <strong>$10</strong> and for the Women's each player pays <strong>$5</strong>. Each team is required to raise <strong>$100</strong> for Gonzo Soccer as well. Failure to raise the required amount by <strong>April 5th at 11:59pm</strong> may result in expulsion from the tournament. Check out <Link to={'/Gonzo'}>Gonzo</Link> to learn more about the program we are donating to!
								</div>
							</div>
						</div>

						<div className="card" style={cardStyle}>
							<div className="card-header btn btn-light text-left" style={cardResponsive} id="headingTwelve" data-parent="#accordion" data-toggle="collapse" data-target="#collapseTwelve" aria-expanded="true" aria-controls="collapseTwelve">
								<div >
									Where and when is the tournament?
								</div>
							</div>
							<div id="collapseTwelve" className="collapse" aria-labelledby="headingTwelve" data-parent="#accordion">
								<div className="card-body">
									Both tournaments will be <strong>May 4-6</strong>, on the fields by the Lakeside.
								</div>
							</div>
						</div>

						<div className="card" style={cardStyle}>
							<div className="card-header btn btn-light text-left" style={cardResponsive} id="headingTwelve" data-parent="#accordion" data-toggle="collapse" data-target="#collapseThirteen" aria-expanded="true" aria-controls="collapseThirteen">
								<div >
									What is the tournament structure?
								</div>
							</div>
							<div id="collapseThirteen" className="collapse" aria-labelledby="headingThirteen" data-parent="#accordion">
								<div className="card-body">
									The Co-Ed tournament will be 40 teams divided into 10 groups. There will be group stages and then elimination bracket, just like FIFA World Cup. The Women's tournament will have 8 teams split into 2 groups.
								</div>
							</div>
						</div>
					</div>
				</div>

				<Footer />
			</div>
		);
	}
}

export default FAQ;