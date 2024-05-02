import React,{useState} from 'react';
import { View, Text, Alert, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import DocumentPicker from 'react-native-document-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import RNFetchBlob from 'rn-fetch-blob';


const FileUploadPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedDoc, setSelectedDoc] = useState(null);
  const handleFileUpload = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      console.log(res, "res")
      setSelectedDoc(res[0].name);

      Alert.alert('File uploaded successfully');
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User cancelled file picker');
      } else {
        console.log('DocumentPicker Error: ', err);
      }
    }
  };
  const handleImageUpload = () => {
    const options = {
      mediaType: 'photo', // Specify 'photo' for images
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        setSelectedFile(response);
        Alert.alert('Image uploaded successfully');
      }
    });
  };
  const downloadPDF = () => {
    const pdfUrl = 'https://www.escaux.com/rsrc/EscauxCustomerDocs/DRD_T38Support_AdminGuide/T38_TEST_PAGES.pdf';
    const downloadDir = RNFetchBlob.fs.dirs.DownloadDir;
    const fileName = 'Testpage.pdf';
    const fileUrl = `${downloadDir}/${fileName}`;
   
    RNFetchBlob
      .config({
        fileCache: true,
        addAndroidDownloads: {
          useDownloadManager: true,
          notification: true,
          path: fileUrl,
          description: 'PDF file',
        },
      })
      .fetch('GET', pdfUrl)
      .then((res) => {
        // Download complete
        console.log('File downloaded to:', res.path());
      })
      .catch((error) => {
        // Handle download error
        console.error('Error downloading file:', error);
      });
    }
  return (
    <View style={styles.container}>
        <Text style={styles.HeaderText}>Welcome To File Upload Page</Text>
        {selectedFile && selectedFile.assets ? (
          <Image
            source={{ uri: selectedFile.assets[0].uri }}
            style={styles.profileImage}
          />
        ) :
          (
            <Image
              source={require('../src/Images/userImage-Photoroom.jpg')}
              style={styles.profileImage}
            />
          )}
        <TouchableOpacity style={styles.ImageUploadforcamera} onPress={handleImageUpload} activeOpacity={0.9}>
          <Text style={{ color: '#3fa1bc' }}>Upload Image</Text>
        </TouchableOpacity>
        <View>
          <TouchableOpacity style={styles.ImageUpload} onPress={handleFileUpload} activeOpacity={0.9}>
            <Feather name='upload-cloud' size={25} color={'#3fa1bc'} ></Feather>
            <Text style={styles.uploadText}>Upload File</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.fileUploadStyle}>
         
          <Text style={{ color: '#3fa1bc' }}>{selectedDoc ? selectedDoc : 'No File Choosen'}</Text>
          {selectedDoc && <FontAwesome name='trash-o' size={20} color={'black'} style={{ marginLeft: '2%' }} onPress={() => setSelectedDoc('')}></FontAwesome>}
        </View>
        <TouchableOpacity style = {{width : '50%' , height : '5%',borderWidth : 1 , alignItems : 'center'}} onPress={downloadPDF}>
        <AntDesign name='download' size={22} color={'black'} ></AntDesign>
        </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  uploadText: {
    color: '#3fa1bc'
  },
  HeaderText: {
    color: '#3fa1bc',
    fontSize: 20,
    marginVertical: '5%'
  },
  fileUploadStyle: {
    padding: '3%',
    borderWidth: 1,
    margin: '2%',
    borderStyle: 'dashed',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#3fa1bc',
    backgroundColor: '#D9E8ED',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75, // Half of the width and height to make it a circle
  },
  ImageUpload: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
    padding: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#3fa1bc',
    backgroundColor: '#D9E8ED',
  },
  ImageUploadforcamera: {
    padding: '5%',
    borderRadius: 10,
    backgroundColor: '#D9E8ED',
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FileUploadPage;
