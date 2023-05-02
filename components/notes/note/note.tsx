import { Card, CardBody, CardHeader, Heading, Text } from "@chakra-ui/react";

interface NoteProps {
    title: string;
    content: string;
}

export const Note = ({title, content}: NoteProps) => {
    return (
        <Card>
            <CardHeader>
                <Heading size='md'>{title}</Heading>
            </CardHeader>

            <CardBody>
                <Text>{content}</Text>
            </CardBody> 
        </Card>
    );
}
