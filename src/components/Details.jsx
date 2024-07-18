
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { Slider } from '@mui/material';
import { checkPropTypes } from 'prop-types';
import { useParams } from 'react-router-dom';
import useGetItemData from '../hooks/useGetItemData';

function SliderValueLabel({ children }) {
    return (
      <span className="label">
        <div className="value">{children}</div>
      </span>
    );
  }

  SliderValueLabel.propTypes = {
    children: checkPropTypes.element,
  };


export default function MediaControlCard() {

  const { type, id } = useParams()
  const { data } = useGetItemData({ type, id })
  console.log('spotify data', data)

  let image, mainText, subText

  if (data && type === 'albums' || type === 'artists') {
    image = data.images[0].url
    mainText = data.name
    subText = `Total tracks: ${data.total_tracks}`
  }
  if (data && type === 'artists') {
    image = data.images[0].url
    mainText = data.name
  }
  if (data && type === 'tracks') {
    image = data.album.images[0].url
    mainText = data.name
  }

  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex', width: '100%'}}>
       <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',justifyContent: 'center' }}>
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image={image}
          />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
              {mainText}
              <Box>
                {subText}
              </Box>
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              {}
            </Typography>
          </CardContent>
          {type === 'tracks' && (
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', pl: 2, pr: 3 }}>
                <Slider defaultValue={10} slots={{ valueLabel: SliderValueLabel }} />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                <IconButton aria-label="previous">
                  {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                </IconButton>
                <IconButton aria-label="play/pause">
                  <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                </IconButton>
                <IconButton aria-label="next">
                  {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                </IconButton>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Card>
  );
}
