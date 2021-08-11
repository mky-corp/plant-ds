import Webcam from 'react-webcam';
import { useHistory } from 'react-router-dom';
import { SyntheticEvent, useContext, useEffect } from 'react';
import { Button, Container, Form, ProgressBar } from 'react-bootstrap';

// components
import ModalSesion from '../components/ModalSesion/ModalSesion';
import MainButton from '../components/MainButton/MainButton';
import DropZone from '../components/DropZone/DropZone';
import FormUp from '../components/FormUp/FormUp';
import Modal from '../components/Modal/Modal';

// others
import webCamImage from '../assets/detect_camera.png';
import FileContext from '../context/FileContext';
import AuthContext from '../context/AuthContext';
import useWebcam from '../hooks/useWebcam';
import useModal from '../hooks/useModal';

const Options = () => {
  const { buffers, handleImageChange, progress, progressInner } =
    useContext(FileContext);
  const { auth } = useContext(AuthContext);

  const history = useHistory();
  const [isOpenLogin, openModal] = useModal();
  const { capture, webCam, handleWebCam, webcamRef, width, height } =
    useWebcam();

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    history.push('/detects');
  };

  useEffect(() => {
    if (!auth) openModal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth]);

  return (
    <>
      <Modal unClose={true} isOpen={isOpenLogin}>
        <h3 className='text-center fs-5'>Necesitas Iniciar Sesión</h3>
        <ModalSesion />
      </Modal>
      <section className='d-flex options__container'>
        <div className='secondary-bg options__hw'>
          <FormUp
            handleSubmit={handleSubmit}
            title='Use camera'
            description='Slate helps you see how many 
            more days you need to work to 
            reach your financial goal for the 
            month and year.'
          >
            {webCam && (
              <Webcam
                audio={false}
                ref={webcamRef}
                width={width / 2.4}
                height={height / 2.4}
                screenshotFormat='image/jpeg'
              />
            )}
            {!webCam && (
              <img
                src={webCamImage}
                alt='WebCam load'
                width={width / 2.4}
                height={height / 2.4}
                className='webcam__img'
              />
            )}
            <Container>
              <MainButton
                type='button'
                first={true}
                onClick={!webCam ? handleWebCam : capture}
                title={!webCam ? 'Active Camera' : 'Capture Image'}
              />
              {webCam && (
                <section className='w-100 d-flex justify-content-center'>
                  <button
                    className='btn btn-dark'
                    type='button'
                    onClick={handleWebCam}
                  >
                    Deactive Camera
                  </button>
                </section>
              )}
            </Container>
          </FormUp>
        </div>
        <div className='dark-bg wh-grap' />
        <div className='third-bg p-4 options__hw'>
          <FormUp
            handleSubmit={handleSubmit}
            title='Load Files'
            description='Slate helps you see how many more days you need to 
              work to reach your financial goal for the month and year.'
          >
            <Container>
              <DropZone />
            </Container>
            <Container>
              <Form.Group
                controlId='formFiles'
                className='mt-3 m-input__files d-flex flex-column align-items-center'
              >
                <Form.Label className='white-color d-flex justify-content w-90'>
                  Upload Multiple Files
                </Form.Label>
                <section className='w-options__btns'>
                  <Form.Label className='options__input'>
                    <Form.Control
                      multiple
                      required
                      name='uploadFiles'
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
                  />
                  <Button
                    type='submit'
                    disabled={buffers?.length === 0 || !(progressInner === '')}
                    className='primary-bg primary-border w-100'
                    onClick={handleSubmit}
                  >
                    Detects
                  </Button>
                </section>
              </Form.Group>
            </Container>
          </FormUp>
        </div>
      </section>
    </>
  );
};

export default Options;