import React, { useState, useEffect } from 'react';
import Dialog from './Dialog';
import Spinner from '@ctkit/spinner';
import Button from '@ctkit/button';
import { saveAs } from 'file-saver';
import { IcDownload } from '@ctkit/icons';

export default ({ onClose, resourceName, prepare, ...props }) => (
  <Dialog {...props} onClose={onClose}>
    <div className="text-center">
      <DialogContent onClose={onClose} prepare={prepare} resourceName={resourceName}/>
    </div>
  </Dialog>
);

const DialogContent = ({ onClose, resourceName, prepare }) => {

  const [resource, setResource] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      prepare().then((resource) => setResource(resource));
    }, 1000);
  }, []);

  const controller = {
    download : () => {
      saveAs(resource, resourceName);
      onClose()
    }
  }

  if (!resource) {
    return (
      <>
        <h6 className="mt-5 mb-3">Votre téléchargement est en cours de préparation.</h6>
        <div className="clearfix mb-4">
          <Spinner/>
        </div>
        <Button compact onClick={onClose}>Annuler</Button>

      </>
    );
  } else {
    return (
      <>
        <h6 className="mt-5 mb-3">Votre fichier est prêt.</h6>
        <Button icon={<IcDownload/>} onClick={controller.download}>Télécharger</Button>
      </>
    );
  }
};
