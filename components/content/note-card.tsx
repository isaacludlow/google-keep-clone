import { Note } from "@/models/dtos/Note";
import { Card, CardBody, CardHeader, Heading, Text } from "@chakra-ui/react";

export default function NoteCard({ Title, Content }: Note) {
    return (
        <Card>
            <CardHeader>
                <Heading size='md'>{Title}</Heading>
            </CardHeader>

            <CardBody>
                <Text>{Content}</Text>
            </CardBody> 
        </Card>
    );
}
