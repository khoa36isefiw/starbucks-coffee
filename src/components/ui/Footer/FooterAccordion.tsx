import Accordion from '@mui/material/Accordion';

import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IFooterData } from '../../util/constants';

export default function FooterAccordion({ title, contents }: IFooterData) {
    return (
        <Accordion
            sx={{
                '&.Mui-expanded': {
                    margin: '0',
                },
                boxShadow: 'none',
                borderBottom: 'none',
            }}
        >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                <Typography component="span" sx={{ fontWeight: 'bold' }}>
                    {title}
                </Typography>
            </AccordionSummary>
            {contents.map((content, index) => (
                <AccordionDetails key={index}>{content}</AccordionDetails>
            ))}
        </Accordion>
    );
}
