import { BaseService, projectAxios } from './BaseService';

class BooksAPIService extends BaseService {
  public async getNewBooks() {
    return this.get('new');
  }

 /* public async sendPost({ image, text, title, lesson_num }: IBookSendRequest) {
    const { headers } = await this.getHeaders();
    if (this.credentials?.URL) {
      const { URL } = this.credentials;

      const formData = new FormData();
      formData.append('image', image.file as Blob);
      formData.append('text', text);
      formData.append('title', title);
      formData.append('lesson_num', String(lesson_num));

      return await projectAxios.post(`${URL}/blog/posts/`, formData, {
        headers: { ...headers, 'Content-Type': 'multipart/form-data' },
      });
    }
  }*/
}

export const BooksService = new BooksAPIService();
