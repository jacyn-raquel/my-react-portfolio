import {Container, Row, Col} from 'react-bootstrap';
import {Link, NavLink} from 'react-router-dom';
export default function Footer(){
	return(
		<Container className="bg-primary section">
			<Row>
				{/*Column 1*/}
				<Col>
				 <Link href="#">
				 <img src="#" alt="logo"/>
				 </Link>

				 <h4>My Portfolio</h4>
				 <p>Lorem ipsum</p>
				</Col>

				<Col>
				 <Link href="#">
				 <img src="#" alt="logo"/>
				 </Link>

				 <h4>My Portfolio</h4>
				 <p>Lorem ipsum</p>
				</Col>

				<Col>
				 <Link href="#">
				 <img src="#" alt="logo"/>
				 </Link>

				 <h4>My Portfolio</h4>
				 <p>Lorem ipsum</p>
				</Col>

				<Col>
				 <Link href="#">
				 <img src="#" alt="logo"/>
				 </Link>

				 <h4>My Portfolio</h4>
				 <p>Lorem ipsum</p>
				</Col>
			</Row>
		</Container>	
		)
}