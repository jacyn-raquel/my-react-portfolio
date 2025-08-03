import {Card, Button} from 'react-bootstrap';



export default function ProjectCard({projectProp}){
	const {title, description, myRole, tools} = projectProp;

	return (
		<>
			<Card style={{ width: '18rem' }}>
				<Card.Img variant="top" src="holder.js/100px180" />
				<Card.Body>
					<Card.Title>{title}</Card.Title>
					<Card.Subtitle>Description</Card.Subtitle>
					<Card.Text>
						{description}
					</Card.Text>
					<Card.Subtitle>My Role </Card.Subtitle>
					<Card.Text>{myRole}</Card.Text>
					<Card.Subtitle>Tools Used</Card.Subtitle>
					<Card.Text>{tools}</Card.Text>

					<Button variant="primary">Go somewhere</Button>
				</Card.Body>
			</Card>
		</>

		)
}