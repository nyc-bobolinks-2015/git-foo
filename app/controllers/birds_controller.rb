get '/birds' do 
  @birds = Bird.all
  erb :'birds/index'
end

get '/birds/new' do 
  if session[:errors]
    @errors = session[:errors]
    session.delete(:errors)
  end

  @bird = Bird.new
  erb :'birds/new'
end

get '/birds/:id/edit' do
  if session[:errors]
    @errors = session[:errors]
    session.delete(:errors)
  end
  
  @bird = Bird.find_by(id: params[:id])
  erb :'birds/edit'
end

put '/birds/:id' do
  bird = Bird.find_by(id: params[:id])
  if bird.update_attributes(params[:bird])
    redirect "/birds" 
  else
    session[:errors] = bird.errors.full_messages
    redirect "/birds/#{bird.id}/edit"
  end
end

post '/birds' do
  bird = Bird.new(params[:bird])
  if bird.save
    redirect '/birds'
  else
    session[:errors] = bird.errors.full_messages
    redirect "/birds/new"
  end
end