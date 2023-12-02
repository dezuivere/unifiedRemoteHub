import google.generativeai as palm
import re
import gradio as gr
from gtts import gTTS


apiKey = 'AIzaSyCMdFOlCh1vBeTp-_I9IZ2zvwM1aMWQnWM'

palm.configure(api_key=apiKey)

models = [m for m in palm.list_models(
) if 'generateText' in m.supported_generation_methods]
model = models[0].name   # It will select one of the model 


def genResp(text):
    completion = palm.generate_text(
        model=model,
        prompt=text,
        temperature=0,
        max_output_tokens=400  # The maximum length of the response
    )
    # Ensure the result is a string
    if isinstance(completion.result, str):
        return completion.result
    else:
        return str(completion.result)


def random_response(message, history):
    res =  genResp(message)
    response = f'<h2>{message}</h2><p>{res}</p>'
    return response

demo = gr.ChatInterface(random_response)

demo.launch(share=True)