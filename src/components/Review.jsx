import React, { useState } from 'react';
import { Container, Row, Col, Button, Card, Image } from 'react-bootstrap';

// Sample data for reviews with an image and rating property
const allReviews = [
  { id: 1, name: "Arun", text: "Gangai Borewell offered the most reasonable quote among many..", image: "https://th.bing.com/th/id/OIP.SVrM_vmlgId9Kb88j_REawHaGY?pid=ImgDet&w=179&h=154&c=7&dpr=1.3", rating: 5 },
  { id: 2, name: "Pravin", text: "Very satisfied with the  quality of work & Time. Impressed with the professionalism.", image: "https://th.bing.com/th/id/OIP.hOdCWbgqzcOv5kTJVcil2gHaE2?w=265&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", rating: 4 },
  { id: 3, name: "Ranjith", text: "The team was punctual, professional, and completed the work efficiently.", image: "https://www.sanatiborewells.com/assets/img/borewell-drilling-services-in-Bangalore.jpg", rating: 5 },
  { id: 4, name: "Anand", text: "Kudos to the entire crew—keep up the great work!  Highly recommended.", image: "https://th.bing.com/th/id/OIP.CFqYU1jJkpbEXTdbjxeb3AHaEK?w=1280&h=720&rs=1&pid=ImgDetMain", rating: 3 },
  { id: 5, name: "Rajesh", text: "Good value for money. They redrilled  , removed the  casing, and installed  pipes.", image: "https://5.imimg.com/data5/SELLER/Default/2020/12/XN/MH/TC/35368416/0-31605400-1490263125-borewell-jpg-500x500.jpg", rating: 4 },
  { id: 6, name: "Manickam", text: "I'm abroad & I called them for a borewell in my house, They resolved it effectively.", image: "https://tiimg.tistatic.com/fp/1/003/240/fully-automatic-borewell-drilling-service-128.jpg", rating: 5 },
  { id: 7, name: "Hariharan", text: "Great service,Professional team, Friendly owner. Good history. Best borewell in Gobichettipalayam.", image: "https://th.bing.com/th/id/OIP.Wyg-RHV2KNnvkFm98oQFNgAAAA?pid=ImgDet&w=179&h=317&c=7&dpr=1.3", rating: 4 },
  { id: 8, name: "Velu", text: "I have issue with my existing borewell, Gangai Borewells resolved the problem effectively", image: "https://i.ytimg.com/vi/YhdhQ-fbQ1c/maxresdefault.jpg", rating: 5 },
  { id: 10, name: "Sivakumar", text: " My farm is in Siruvalur and Nambiyur. Excellent diviner and water source locating. Great borewell service", image: "https://sanidhyaborewells.com/wp-content/uploads/2023/09/sanidhyaborewells-services.jpeg", rating: 5 },
 // Add more reviews as needed
];

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span key={i} className={i <= rating ? "text-warning" : "text-muted"}>★</span>
    );
  }
  return <div>{stars}</div>;
};

const Review = () => {
  const [reviewsToShow, setReviewsToShow] = useState(6); // Initially show 6 reviews

  // Function to load more reviews
  const loadMoreReviews = () => {
    if (reviewsToShow + 3 <= allReviews.length) {
      setReviewsToShow(reviewsToShow + 3); // Load 3 more reviews
    } else {
      setReviewsToShow(allReviews.length); // Load all remaining reviews
    }
  };

  return (
    <div className="p-3">
      <Container>
        <h2 className="text-center my-4 fontdesign headingcss p-3">Customer Reviews</h2>
        <div className="fontdesign">
          <Row className="justify-content-center">
            {/* Loop over the reviews and display them */}
            {allReviews.slice(0, reviewsToShow).map((review) => (
              <Col md={4} key={review.id} className="mb-4">
                <Card className='border-0'>
                  <Card.Body className=" "> {/* Center content of Card */}
                    {/* Display the reviewer's image */}
                    <Row>
                      <Col sm={12} xl={4} >  <div className="mb-3">
                        <Image src={review.image} className='rounded-circle' width={120} height={120} />
                      </div>
                      </Col>
                      <Col sm={12} xl={8}>  <Card.Title>{review.name}</Card.Title>
                        <Card.Text>{review.text}</Card.Text>
                        {/* Display the rating stars */}
                        <StarRating rating={review.rating} />
                      </Col>
                    </Row>




                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        {/* "Load More Reviews" button */}
        {reviewsToShow < allReviews.length && (
          <div className="text-center  fontdesign mt-4">
            <Button onClick={loadMoreReviews} variant="success">
              More Reviews
            </Button>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Review;
