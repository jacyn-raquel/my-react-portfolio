import {Container, Row, Col, Card, Button} from 'react-bootstrap';


export default function Project(){
	return(
		<section className="section">
			<content>
				<Container>
					<Row>
						<h3>Check out some of my latest works</h3>
						<h1> PROJECTS </h1> 
						{/*Tools Used*/}
						<Col>
						<Card style={{ width: '18rem' }}>
							<Card.Img variant="top" src="holder.js/100px180" />
							<Card.Body>
								<Card.Title>Card Title</Card.Title>
								<Card.Text>
									Some quick example text to build on the card title and make up the
									bulk of the card's content.
								</Card.Text>
								<Button variant="primary">Go somewhere</Button>
							</Card.Body>
						</Card>
					</Col>

				</Row>
			</Container>
		</content>
	</section>
		)
}