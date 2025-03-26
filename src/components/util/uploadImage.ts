export const uploadImageToCloudinary = async (file: File) => {


    if (!file) return;

    console.log('file: ', file);
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', `starbucks-image`);
    formData.append('upload_name', `dxulhqdp3`);


    const res = await fetch(`https://api.cloudinary.com/v1_1/dxulhqdp3/image/upload`, {

        method: 'POST',
        body: formData,
    });

    const data = await res.json();
    return data.secure_url;
};
