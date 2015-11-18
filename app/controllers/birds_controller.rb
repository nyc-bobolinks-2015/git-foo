require 'pry'

get '/birds' do
  @birds = Bird.all
  @bird = Bird.new
  erb :'birds/index'
end

get '/birds/new' do
  if session[:errors]
    @errors = session[:errors]
    session.delete(:errors)
  end

  @bird = Bird.new

  # if request.xhr?
  #   erb :'birds/new', layout: false
  # else
  #   erb :'birds/new'
  # end

  erb :'birds/new', layout: !request.xhr?
end

get '/birds/count' do
  "The count of the birds is #{Bird.all.length}"
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
    erb :'birds/_bird', locals: {bird: bird}, layout: false
  else
    session[:errors] = bird.errors.full_messages
    redirect "/birds/new"
  end
end
