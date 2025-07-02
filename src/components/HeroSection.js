import {Container, Row, Col} from 'react-bootstrap';
import {useState, useEffect} from 'react';

export default function HeroSection(){

	const [title, setTitle] = useState()
	return(
		<section className="section" id="hero">
			<content>
				<Container >
					<Row>
						<Col>
						<h1> Hi, I'm Jacyn, a Web Developer!</h1>
						<h3> I build fast, modern, and responsive websites </h3>
					</Col>
				</Row>
			</Container>
		</content>
	</section>
	)
}