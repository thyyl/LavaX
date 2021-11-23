import React from 'react'
import { View, TextInput, StyleSheet, Text, Pressable } from 'react-native'
import { Formik } from 'formik';
import * as Yup from "yup";

const RegisterForm = () => {
  const RegisterSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Please enter an email"),
    password: Yup.string()
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Password must contain at least 8 characters, one uppercase, one number and one special case character"
      )
      .required("Please enter your password"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Please confirm your password"),
  });

  return (
    <Formik 
      initialValues={{ email: '', password: '', confirmPassword: ''}} 
      validationSchema={RegisterSchema}
      onSubmit={values => console.log(values)}
    >
       {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
         <View style={styles.container}>
           <View style={styles.inputContainer}>
             <Text style={styles.textFieldLabel}>
               Email
             </Text>
             <TextInput
              value={values.email}
              style={styles.textFieldInput}
              onChangeText={handleChange('email')}
              onBlur={() => setFieldTouched('email')}
              placeholder="Enter your email"
            />
           </View>

           {touched.email && errors.email &&
              <Text style={styles.errorsText}>{errors.email}</Text>
            }

           <View style={styles.inputContainer}>
             <Text style={styles.textFieldLabel}>
               Password
             </Text>
             <TextInput
              value={values.password}
              secureTextEntry={true}
              style={styles.textFieldInput}
              onChangeText={handleChange('password')}
              onBlur={() => setFieldTouched('password')}
              placeholder="Enter your password"
            />
           </View>

           {touched.password && errors.password &&
              <Text style={styles.errorsText}>{errors.password}</Text>
            }

            <View style={styles.inputContainer}>
             <Text style={styles.textFieldLabel}>
               Cofirmation
             </Text>
             <TextInput
              value={values.confirmPassword}
              secureTextEntry={true}
              style={styles.textFieldInput}
              onChangeText={handleChange('confirmPassword')}
              onBlur={() => setFieldTouched('confirmPassword')}
              placeholder="Confirm your password"
            />
           </View>

           {touched.password && errors.password &&
              <Text style={styles.errorsText}>{errors.password}</Text>
            }
            <Pressable
              style={styles.button}
              disabled={!isValid}
              onPress={() => handleSubmit}
            > 
              <Text style={styles.buttonText}>Sign Up</Text>
            </Pressable>
         </View>     
       )
      }
    </Formik>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 50,
    paddingRight: 30,
  },
  inputContainer: {
    width: '100%',
    backgroundColor: '#e4e3e3',
    borderRadius: 5,
    height: 50,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  textFieldLabel: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  textFieldInput: {
    width: '65%',
    fontSize: 15,
    fontWeight: 'bold',
  },
  errorsText: {
    fontSize: 12, 
    color: '#FF0D10',
    fontWeight: 'bold',
    marginTop: 5,
  },
  button: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 50,
    borderRadius: 5,
    marginTop: 50,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15
  }
})

export default RegisterForm
