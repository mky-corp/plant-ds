import { SyntheticEvent, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Container, Form, ProgressBar } from 'react-bootstrap';

import DescOptions from '../components/DescOptions';
import DropZone from '../components/DropZone';
import FileContext from '../context/FileContext';

const Options = () => {
  const history = useHistory();
  const { buffers, handleImageChange, progress, progressInner } =
    useContext(FileContext);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    history.push('/detects');
  };

  return (
    <section className='d-flex options__container'>
      <div className='primary-bg options__hw'></div>
      <div className='dark-bg wh-grap'></div>
      <div className='third-bg p-4 options__hw'>
        <Form
          className='w-100 h-100 d-flex flex-column justify-content-around align-items-center'
          onSubmit={handleSubmit}
        >
          <Container>
            <DropZone />
          </Container>
          <Container>
            <Form.Group
              controlId='formFiles'
              className='m-4 d-flex flex-column'
            >
              <Form.Label className='white-color'>
                Upload Multiple Files
              </Form.Label>
              <Form.Label className='options__input'>
                <Form.Control
                  multiple
                  required
                  type='file'
                  placeholder='Choose fields'
                  onChange={handleImageChange}
                />
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M9.28063 11.1823C9.24934 11.1514 9.2071 11.134 9.16307 11.134C9.11904 11.134 9.0768 11.1514 9.04552 11.1823L6.62783 13.6C5.50845 14.7194 3.61925 14.838 2.38336 13.6C1.14538 12.362 1.26398 10.4749 2.38336 9.35554L4.80104 6.93785C4.86554 6.87335 4.86554 6.76724 4.80104 6.70274L3.97295 5.87465C3.94167 5.84367 3.89942 5.8263 3.8554 5.8263C3.81137 5.8263 3.76913 5.84367 3.73784 5.87465L1.32016 8.29234C-0.440052 10.0525 -0.440052 12.9009 1.32016 14.6591C3.08036 16.4172 5.92874 16.4193 7.68687 14.6591L10.1046 12.2414C10.1691 12.1769 10.1691 12.0708 10.1046 12.0063L9.28063 11.1823ZM14.6611 1.32016C12.9009 -0.440053 10.0525 -0.440053 8.29441 1.32016L5.87464 3.73785C5.84367 3.76913 5.82629 3.81138 5.82629 3.8554C5.82629 3.89943 5.84367 3.94167 5.87464 3.97296L6.70065 4.79897C6.76515 4.86347 6.87126 4.86347 6.93576 4.79897L9.35345 2.38128C10.4728 1.2619 12.362 1.1433 13.5979 2.38128C14.8359 3.61925 14.7173 5.50638 13.5979 6.62576L11.1802 9.04344C11.1493 9.07473 11.1319 9.11697 11.1319 9.161C11.1319 9.20503 11.1493 9.24727 11.1802 9.27856L12.0083 10.1066C12.0728 10.1711 12.1789 10.1711 12.2434 10.1066L14.6611 7.68896C16.4192 5.92875 16.4192 3.08037 14.6611 1.32016ZM10.0317 5.08401C10.0004 5.05303 9.9582 5.03566 9.91418 5.03566C9.87015 5.03566 9.8279 5.05303 9.79662 5.08401L5.08401 9.79455C5.05303 9.82584 5.03565 9.86808 5.03565 9.91211C5.03565 9.95613 5.05303 9.99838 5.08401 10.0297L5.90793 10.8536C5.97243 10.9181 6.07854 10.9181 6.14304 10.8536L10.8536 6.14305C10.9181 6.07855 10.9181 5.97244 10.8536 5.90794L10.0317 5.08401Z'
                    fill='#171717'
                  />
                </svg>
                <span>Choose Files</span>
              </Form.Label>
              {progress && (
                <ProgressBar
                  className='all-animations'
                  now={typeof progress !== 'string' ? progress : 0}
                  max={100}
                />
              )}
              <span
                className='w-100 d-flex justify-content-center white-color'
                dangerouslySetInnerHTML={{ __html: progressInner + '' }}
              ></span>
              <Button
                type='submit'
                disabled={buffers?.length === 0 || !(progressInner === '')}
                className='d-flex justify-content-center primary-bg primary-border'
                onClick={handleSubmit}
              >
                Detects
              </Button>
            </Form.Group>
          </Container>
          <Container>
            <DescOptions
              title='Load Files'
              description='Slate helps you see how many more days you need to 
              work to reach your financial goal for the month and year.'
            />
          </Container>
        </Form>
      </div>
    </section>
  );
};

export default Options;
