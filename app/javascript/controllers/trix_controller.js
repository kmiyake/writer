import { Controller, } from 'stimulus';
import { AttachmentUpload, } from './attachment_upload';

export default class extends Controller {
  attach(e) {
    const attachmentUpload = new AttachmentUpload(e.attachment, this.element);
    attachmentUpload.start();
  }
}
